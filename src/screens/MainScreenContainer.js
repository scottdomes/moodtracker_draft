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

const Content = ({currentScreen}) => {
  const user = useContext(UserContext);

  if (!user) {
    return false;
  }

  const [moods, setMoods] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const reference = database().ref(`/users/${user.uid}/moods/`);
  useEffect(() => {
    const onValueChange = onLoadEmotions(reference, (moods) => {
      setMoods(moods);
      setIsLoaded(true);
    });

    // Stop listening for updates when no longer required
    return () => reference.off('value', onValueChange);
  }, [user]);

  if (!isLoaded) {
    return false;
  }

  return (
    <View style={styles.contentContainer}>
      {currentScreen === SCREENS.HOME && <Home moods={moods} />}
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
