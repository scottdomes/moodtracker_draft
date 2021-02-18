import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {grey, darkPurple} from '../styles/colors';

const NavigationIcon = ({icon, isActive, onPress}) => {
  const currentStyles = isActive
    ? {...styles.base, ...styles.active}
    : styles.base;
  return (
    <TouchableOpacity onPress={onPress}>
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
