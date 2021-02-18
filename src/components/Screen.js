import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Screen = ({name, children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    zIndex: 9999,
    position: 'absolute'
  },
  text: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default Screen;
