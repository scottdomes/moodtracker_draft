import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './src/components/Header';
import NavigationBar, {SCREENS} from './src/components/NavigationBar';

const App = () => {
  const [currentScreen, setScreen] = useState(SCREENS.HOME);
  return (
    <View style={styles.container}>
      <Header text={currentScreen} />
      <NavigationBar currentScreen={currentScreen} setScreen={setScreen} />
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
});

export default App;
