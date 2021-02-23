import React from 'react';
import EmotionSelector from '../components/EmotionSelector';
import EmotionChart from '../components/EmotionChart';

const Home = ({moods}) => {
  return (
    <>
      <EmotionSelector moods={moods} />
      <EmotionChart moods={moods} />
    </>
  );
};

export default Home;
