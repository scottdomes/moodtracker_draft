import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import EmotionSelector from '../components/EmotionSelector';
import EmotionChart from '../components/EmotionChart';
import {UserContext} from '../../App.js';

const Home = () => {
  return (
    <UserContext.Consumer>
      {(user) => {
        return (
          <>
            <EmotionSelector user={user} />
            <EmotionChart user={user} />
          </>
        );
      }}
    </UserContext.Consumer>
  );
};

const styles = StyleSheet.create({});

export default Home;
