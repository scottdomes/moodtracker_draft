import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {yellow} from '../styles/colors';
import {basicShadow} from '../styles/shadows';

const BasicButton = ({onPress, children}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 80,
    borderRadius: 22,
    ...basicShadow,
    backgroundColor: yellow,
  },
  text: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BasicButton;
