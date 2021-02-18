import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './src/components/Header';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faPoll, faUser} from '@fortawesome/free-solid-svg-icons';

grey = '#89909A';

const App = () => {
  return (
    <View style={styles.container}>
      <Header text="Home" />
      <View style={styles.footer}>
        <FontAwesomeIcon icon={faHome} size={24} style={styles.icon} />
        <FontAwesomeIcon icon={faPoll} size={24} style={styles.icon} />
        <FontAwesomeIcon icon={faUser} size={24} style={styles.icon} />
      </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingBottom: 20,
  },
  icon: {
    color: grey,
  },
});

export default App;
