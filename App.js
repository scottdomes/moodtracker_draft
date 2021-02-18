import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar, Button} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.scrollView}>
        <Button title="Log in" />
        <Button title="Sign up" />
        <Button title="Log out" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
