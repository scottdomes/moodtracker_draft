import React, {useState} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import BasicButton from '../components/Button';
import Input from '../components/Input';
import {lightPurple} from '../styles/colors';
import Link from '../components/Link';

const Login = ({navigateToSignUp, navigateToForgot, setError}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = () => {
    setError('');
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setError('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          setError('That email address is invalid!');
        }

        setError(error.message);
      });
  };
  return (
    <>
      <Input
        label="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        textContentType="emailAddress"
      />
      <Input
        label="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        textContentType="password"
        secureTextEntry
      />
      <View style={styles.center}>
        <BasicButton backgroundColor={lightPurple} onPress={logIn}>
          Log in
        </BasicButton>
        <View style={styles.linkContainer}>
          <Link onNavigate={navigateToSignUp}>Sign up</Link>
        </View>
        <View style={styles.linkContainer}>
          <Link onNavigate={navigateToForgot}>Forgot password?</Link>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    marginTop: 20,
  },
  center: {
    alignItems: 'center',
  },
});

export default Login;
