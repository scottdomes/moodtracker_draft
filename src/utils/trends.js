import {EMOTION_NUMBERS} from '../constants';

const getEmotionCounts = (data) => {
  const emotionCounts = {
    SAD: 0,
    MEH: 0,
    GOOD: 0,
    GREAT: 0,
  };

  data.forEach((record) => {
    emotionCounts[record.emotion] = emotionCounts[record.emotion] + 1;
  });

  return emotionCounts;
};

export const mostCommonMood = (data) => {
  const emotionCounts = getEmotionCounts(data);
  return Object.keys(emotionCounts).reduce((a, b) =>
    emotionCounts[a] > emotionCounts[b] ? a : b,
  );
};

export const leastCommonMood = (data) => {
  const emotionCounts = getEmotionCounts(data);
  return Object.keys(emotionCounts).reduce((a, b) =>
    emotionCounts[a] < emotionCounts[b] ? a : b,
  );
};

export const averageMood = (data) => {
  const emotionCounts = getEmotionCounts(data);
  console.log(emotionCounts);
  const total = Object.keys(emotionCounts).reduce(
    (accumulator, emotion) =>
      accumulator + EMOTION_NUMBERS[emotion] * emotionCounts[emotion],
    0,
  );
  const number = Math.round(total / data.length);
  return Object.keys(EMOTION_NUMBERS).find(
    (key) => EMOTION_NUMBERS[key] === number,
  );
};
