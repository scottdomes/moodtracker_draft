import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {basic} from '../styles/shadows';

const Card = ({containerStyles, children}) => {
  return (
    <View style={{...styles.container, ...containerStyles}}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 20,
    ...basic,
  },
});

export default Card;
