import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import BasicButton from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import Link from '../components/Link';
import {lightPurple} from '../styles/colors';

const SignUp = ({navigateToLogin}) => {
  return (
    <Card containerStyles={styles.card}>
      <View style={styles.center}>
        <Image source={require('../img/icon.png')} />
      </View>
      <Input label="Username" />
      <Input label="Password" />
      <Input label="Confirm password" />

      <View style={styles.center}>
        <BasicButton backgroundColor={lightPurple}>Sign up</BasicButton>
        <View style={styles.linkContainer}>
          <Link onNavigate={navigateToLogin}>Back to log in</Link>
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
    marginTop: 20
  }
});

export default SignUp;
