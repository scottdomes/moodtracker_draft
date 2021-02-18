import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import NavigationIcon from './NavigationIcon';

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
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingBottom: 20,
  },
});

export default NavigationBar;
