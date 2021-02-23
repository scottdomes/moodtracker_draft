import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

import {StyleSheet, View} from 'react-native';
import BasicButton from '../components/Button';
import Input from '../components/Input';
import Link from '../components/Link';
import {lightPurple} from '../styles/colors';

const SignUp = ({navigateToLogin, setError}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    setError('');
    auth()
      .createUserWithEmailAndPassword(email, password)
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
        <BasicButton backgroundColor={lightPurple} onPress={signUp}>
          Sign up
        </BasicButton>
        <View style={styles.linkContainer}>
          <Link onNavigate={navigateToLogin}>Back to log in</Link>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  linkContainer: {
    marginTop: 20,
  },
  error: {
    marginBottom: 15,
  },
});

export default SignUp;
