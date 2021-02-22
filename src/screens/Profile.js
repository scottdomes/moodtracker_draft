import React, {useState} from 'react';
import {StyleSheet, Button, View} from 'react-native';
import BasicButton from '../components/Button';

const Profile = () => {
  return (
    <View style={styles.container}>
      <BasicButton>Log out</BasicButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200
  }
});

export default Profile;
