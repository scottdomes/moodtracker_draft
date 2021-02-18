import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Card from '../components/Card';

const Home = () => {
  return (
    <Card>
      <Text>Home</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default Home;
