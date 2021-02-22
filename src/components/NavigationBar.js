import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import NavigationIcon from './NavigationIcon';
import {basicUpShadow} from '../styles/shadows';
import {SCREENS} from '../constants';

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
    ...basicUpShadow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
});

export default NavigationBar;
