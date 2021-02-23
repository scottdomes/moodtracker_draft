import React, {useState} from 'react';
import {StyleSheet, Button, View} from 'react-native';
import BasicButton from '../components/Button';
import auth from '@react-native-firebase/auth';
import {UserContext} from '../../App.js';
import { seed } from '../utils/db';

const Profile = () => {
  const signOut = () => {
    auth().signOut();
  };


  return (
    <UserContext.Consumer>
      {(user) => (
        <View style={styles.container}>
          <BasicButton onPress={signOut}>Log out</BasicButton>
          <BasicButton onPress={() => seed(user)}>Seed</BasicButton>
        </View>
      )}
    </UserContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
});

export default Profile;
