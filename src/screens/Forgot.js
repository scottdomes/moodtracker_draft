import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import auth from '@react-native-firebase/auth';

import BasicButton from '../components/Button';
import Input from '../components/Input';
import {lightPurple} from '../styles/colors';
import Link from '../components/Link';

const Forgot = ({navigateToLogin, setError}) => {
  const [email, setEmail] = useState('');

  const forgotPassword = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        navigateToLogin();
      })
      .catch((error) => {
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
      <View style={styles.center}>
        <BasicButton backgroundColor={lightPurple} onPress={forgotPassword}>
          Submit
        </BasicButton>
        <View style={styles.linkContainer}>
          <Link onNavigate={navigateToLogin}>Back to login</Link>
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
});

export default Forgot;
