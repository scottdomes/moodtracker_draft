import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import BasicButton from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import {lightPurple} from '../styles/colors';

const Login = () => {
  return (
    <Card containerStyles={styles.card}>
      <Input label="Username" />
      <Input label="Password" />
      <BasicButton backgroundColor={lightPurple}>Log in</BasicButton>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
  },
});

export default Login;
