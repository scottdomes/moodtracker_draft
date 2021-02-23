import React from 'react';
import {StyleSheet} from 'react-native';
import EmotionSelector from '../components/EmotionSelector';
import EmotionChart from '../components/EmotionChart';

const Home = ({ moods }) => {
  return (
    <>
      <EmotionSelector moods={moods} />
      <EmotionChart moods={moods} />
    </>
  );
};

const styles = StyleSheet.create({});

export default Home;
