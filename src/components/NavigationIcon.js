import React from 'react';
import {StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {grey, darkPurple} from '../styles/colors';

const NavigationIcon = ({icon, isActive}) => {
  const currentStyles = isActive
    ? {...styles.base, ...styles.active}
    : styles.base;
  return <FontAwesomeIcon icon={icon} size={24} style={currentStyles} />;
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
