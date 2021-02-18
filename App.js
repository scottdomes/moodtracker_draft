import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Button,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}>
          <Button title="Log in" />
          <Button title="Sign up" />
          <Button title="Log out" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
