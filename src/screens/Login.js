import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import BasicButton from '../components/Button';
import Card from '../components/Card';
import { lightPurple } from '../styles/colors';

const Login = () => {
  return (
    <Card containerStyles={styles.card}>
      <BasicButton backgroundColor={lightPurple}>Log in</BasicButton>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
  },
});

export default Login;
