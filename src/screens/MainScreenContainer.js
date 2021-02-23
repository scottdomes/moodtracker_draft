import React, {useState, useContext, useEffect} from 'react';
import database from '@react-native-firebase/database';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Home from './Home';
import Trends from './Trends';
import Profile from './Profile';
import {SCREENS} from '../constants';
import {onLoadEmotions} from '../utils/db';
import {UserContext} from '../../App';
import {getRefString} from '../utils/db';

const Content = ({currentScreen}) => {
  const user = useContext(UserContext);

  if (!user) {
    return false;
  }

  const [moods, setMoods] = useState([]);
  const [currentMood, setCurrentMood] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const timestamp = new Date();
  const allMoodRef = database().ref(`/users/${user.uid}/moods/`);
  const currentMoodRef = database().ref(
    `/users/${user.uid}/moods/${getRefString(timestamp)}`,
  );

  const saveMood = (selectedEmotion) => {
    setCurrentMood(selectedEmotion);
    const currentTimestamp = new Date();

    const reference = database().ref(
      `/users/${user.uid}/moods/${getRefString(currentTimestamp)}`,
    );
    reference.set({
      emotion: selectedEmotion,
      timestamp: timestamp.toISOString(),
    });
  };

  useEffect(() => {
    const onAllMoodsChange = onLoadEmotions(allMoodRef, (moods) => {
      setMoods(moods);
      setIsLoaded(true);
    });

    const onCurrentMoodChange = currentMoodRef.on('value', (snapshot) => {
      console.log(snapshot.val())
      if (snapshot.val()) {
        setCurrentMood(snapshot.val().emotion);
      }
    });

    // Stop listening for updates when no longer required
    return () => {
      allMoodRef.off('value', onAllMoodsChange);
      currentMoodRef.off('value', onCurrentMoodChange);
    };
  }, [user]);

  if (!isLoaded) {
    return false;
  }

  return (
    <View style={styles.contentContainer}>
      {currentScreen === SCREENS.HOME && (
        <Home moods={moods} currentMood={currentMood} saveMood={saveMood} />
      )}
      {currentScreen === SCREENS.TRENDS && <Trends moods={moods} />}
      {currentScreen === SCREENS.PROFILE && <Profile />}
    </View>
  );
};

const MainScreenContainer = ({currentScreen, setScreen}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header text={currentScreen} />
        <SafeAreaView>
          <Content currentScreen={currentScreen} />
        </SafeAreaView>
      </ScrollView>
      <SafeAreaView>
        <NavigationBar currentScreen={currentScreen} setScreen={setScreen} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contentContainer: {
    padding: 20,
    flex: 1,
    marginTop: -140,
  },
});

export default MainScreenContainer;
