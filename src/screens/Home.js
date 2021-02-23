import React from 'react';
import EmotionSelector from '../components/EmotionSelector';
import EmotionChart from '../components/EmotionChart';

const Home = ({moods, currentMood, saveMood}) => {
  return (
    <>
      <EmotionSelector currentMood={currentMood} saveMood={saveMood} />
      <EmotionChart moods={moods} />
    </>
  );
};

export default Home;
