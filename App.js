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
});

export default App;
