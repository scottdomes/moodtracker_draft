import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './src/components/Header';
import NavigationBar, {SCREENS} from './src/components/NavigationBar';
import Home from './src/screens/Home';

const App = () => {
  const [currentScreen, setScreen] = useState(SCREENS.HOME);
  return (
    <View style={styles.container}>
      <Header text={currentScreen} />
      <View style={styles.contentContainer}>
        {currentScreen === SCREENS.HOME && <Home />}
      </View>
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
  contentContainer: {
    padding: 20,
    flex: 1,
    marginTop: -130
  }
});

export default App;
