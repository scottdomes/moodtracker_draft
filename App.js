import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView} from 'react-native';
import Header from './src/components/Header';
import NavigationBar, {SCREENS} from './src/components/NavigationBar';
import Home from './src/screens/Home';
import Trends from './src/screens/Trends';

const App = () => {
  const [currentScreen, setScreen] = useState(SCREENS.HOME);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header text={currentScreen} />
        <SafeAreaView>
          <View style={styles.contentContainer}>
            {currentScreen === SCREENS.HOME && <Home />}
            {currentScreen === SCREENS.TRENDS && <Trends />}
          </View>
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

export default App;
