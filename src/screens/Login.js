import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import BasicButton from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import {lightPurple} from '../styles/colors';
import Link from '../components/Link';

const Login = ({navigateToSignUp, navigateToForgot}) => {
  return (
    <Card containerStyles={styles.card}>
      <View style={styles.center}>
        <Image source={require('../img/icon.png')} />
      </View>
      <Input label="Username" />
      <Input label="Password" />
      <View style={styles.center}>
        <BasicButton backgroundColor={lightPurple}>Log in</BasicButton>
        <View style={styles.linkContainer}>
          <Link onNavigate={navigateToSignUp}>Sign up</Link>
        </View>
        <View style={styles.linkContainer}>
          <Link onNavigate={navigateToForgot}>Forgot password?</Link>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    paddingBottom: 30,
  },
  center: {
    alignItems: 'center',
  },
  linkContainer: {
    marginTop: 20,
  },
});

export default Login;
