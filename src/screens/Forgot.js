import React, {useState} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

import BasicButton from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import {lightPurple} from '../styles/colors';
import Link from '../components/Link';

const Forgot = ({navigateToLogin}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

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
    <Card containerStyles={styles.card}>
      <View style={styles.center}>
        <Image source={require('../img/icon.png')} />
        <Text style={styles.error}>{error}</Text>
      </View>
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

export default Forgot;
