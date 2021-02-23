import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, ImageBackground} from 'react-native';
import Login from './Login';
import {SCREENS} from '../constants';

const AuthScreenContainer = ({currentScreen}) => {
  return (
    <ImageBackground
      source={require('../img/backgroundvertical.png')}
      style={styles.background}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          {currentScreen === SCREENS.LOGIN && <Login />}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default AuthScreenContainer;
