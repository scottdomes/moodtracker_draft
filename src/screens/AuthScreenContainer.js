import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import Login from './Login';
import {SCREENS} from '../constants';
import SignUp from './SignUp';
import Forgot from './Forgot';
import Card from '../components/Card';

const AuthScreenContainer = ({currentScreen, setScreen}) => {
  const [error, setError] = useState('');

  return (
    <ImageBackground
      source={require('../img/backgroundvertical.png')}
      style={styles.background}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="position">
            <Card containerStyles={styles.card}>
              <View style={styles.center}>
                <Image source={require('../img/icon.png')} />
                <Text style={styles.error}>{error}</Text>
              </View>
              {currentScreen === SCREENS.LOGIN && (
                <Login
                  navigateToSignUp={() => setScreen(SCREENS.SIGNUP)}
                  navigateToForgot={() => setScreen(SCREENS.FORGOT)}
                  setError={setError}
                />
              )}
              {currentScreen === SCREENS.SIGNUP && (
                <SignUp
                  navigateToLogin={() => setScreen(SCREENS.LOGIN)}
                  navigateToHome={() => setScreen(SCREENS.HOME)}
                  setError={setError}
                />
              )}
              {currentScreen === SCREENS.FORGOT && (
                <Forgot
                  navigateToLogin={() => setScreen(SCREENS.LOGIN)}
                  setError={setError}
                />
              )}
            </Card>
          </KeyboardAvoidingView>
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
    paddingHorizontal: 30,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  card: {
    flexDirection: 'column',
    paddingBottom: 30,
  },
  center: {
    alignItems: 'center',
  },
});

export default AuthScreenContainer;
