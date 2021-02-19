import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import EmotionSelector from '../components/EmotionSelector';
import EmotionChart from '../components/EmotionChart';

const Home = () => {
  return (
    <>
      <EmotionSelector />
      <EmotionChart />
    </>
  );
};

const styles = StyleSheet.create({});

export default Home;
