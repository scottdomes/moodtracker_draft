import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Home from './Home';
import Trends from './Trends';
import Profile from './Profile';
import {SCREENS} from '../constants';

const MainScreenContainer = ({currentScreen, setScreen}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header text={currentScreen} />
        <SafeAreaView>
          <View style={styles.contentContainer}>
            {currentScreen === SCREENS.HOME && <Home />}
            {currentScreen === SCREENS.TRENDS && <Trends />}
            {currentScreen === SCREENS.PROFILE && <Profile />}
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

export default MainScreenContainer;
