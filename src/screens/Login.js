import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import BasicButton from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import {lightPurple} from '../styles/colors';

const Login = () => {
  return (
    <Card containerStyles={styles.card}>
      <View style={styles.center}>
        <Image source={require('../img/icon.png')} />
      </View>
      <Input label="Username" />
      <Input label="Password" />
      <View style={styles.center}>
        <BasicButton backgroundColor={lightPurple}>Log in</BasicButton>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    paddingBottom: 50
  },
  center: {
    alignItems: 'center',
  },
});

export default Login;
