import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import { darkPurple } from '../styles/colors';
import { basicShadow } from '../styles/shadows';

const Input = ({label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 40
  },
  input: {
    height: 45,
    ...basicShadow,
    borderRadius: 22,
    paddingHorizontal: 15
  },
  label: {
    paddingLeft: 15,
    marginBottom: 5,
    fontSize: 18,
    color: darkPurple
  }
});

export default Input;
