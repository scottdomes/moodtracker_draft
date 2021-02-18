import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './src/components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header text="Home" />
      <View style={styles.footer}><Text>Footer</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  footer: {
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
  },
});

export default App;
