import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import NavigationIcon from './NavigationIcon';
import {basic} from '../styles/shadows';

export const SCREENS = {
  HOME: 'HOME',
  TRENDS: 'TRENDS',
  PROFILE: 'PROFILE',
};

const NavigationBar = ({setScreen, currentScreen}) => {
  return (
    <View style={styles.container}>
      <NavigationIcon
        screen={SCREENS.HOME}
        setScreen={setScreen}
        currentScreen={currentScreen}
      />
      <NavigationIcon
        screen={SCREENS.TRENDS}
        setScreen={setScreen}
        currentScreen={currentScreen}
      />
      <NavigationIcon
        screen={SCREENS.PROFILE}
        setScreen={setScreen}
        currentScreen={currentScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 85,
    ...basic,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingBottom: 20,
  },
});

export default NavigationBar;
