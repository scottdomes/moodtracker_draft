import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {lightPurple} from '../styles/colors';

const Link = ({onNavigate, children}) => {
  return (
    <TouchableOpacity onPress={onNavigate}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: lightPurple,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Link;
