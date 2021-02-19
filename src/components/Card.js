import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {basicShadow} from '../styles/shadows';

const Card = ({containerStyles, children}) => {
  return (
    <View style={{...styles.container, ...containerStyles}}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 20,
    ...basicShadow,
    padding: 20,
  },
});

export default Card;
