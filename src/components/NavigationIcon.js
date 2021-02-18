import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {grey, darkPurple} from '../styles/colors';
import {faHome, faPoll, faUser} from '@fortawesome/free-solid-svg-icons';

const ICONS = {
  HOME: faHome,
  TRENDS: faPoll,
  PROFILE: faUser,
};

const NavigationIcon = ({screen, setScreen, currentScreen}) => {
  const isActive = screen === currentScreen;
  const icon = ICONS[screen];
  const currentStyles = isActive
    ? {...styles.base, ...styles.active}
    : styles.base;
  return (
    <TouchableOpacity onPress={() => setScreen(screen)}>
      <FontAwesomeIcon icon={icon} size={24} style={currentStyles} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    color: grey,
  },
  active: {
    color: darkPurple,
  },
});

export default NavigationIcon;
