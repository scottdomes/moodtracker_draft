import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Card from '../components/Card';
import {EMOTIONS, EMOTION_ICONS} from '../constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {darkPurple, lightPurple} from '../styles/colors';
import {UserContext} from '../../App';
import database from '@react-native-firebase/database';
import {onLoadEmotions} from '../utils/db';
import {
  mostCommonMood,
  averageMood,
  leastCommonMood,
  averageMoodThisWeek,
  averageMoodLastWeek,
} from '../utils/trends';

const TREND_CATEGORIES = [
  {
    name: 'Most common mood',
    determiner: mostCommonMood,
  },
  {
    name: 'Average mood',
    determiner: averageMood,
  },
  {
    name: 'Least common mood',
    determiner: leastCommonMood,
  },
  {
    name: 'Average this week',
    determiner: averageMoodThisWeek,
  },
  {
    name: 'Average last week',
    determiner: averageMoodLastWeek,
  },
];

const Trends = ({moods}) => {
  return (
    <>
      {TREND_CATEGORIES.map((category) => {
        const result = category.determiner(moods);
        return (
          <Card containerStyles={styles.card} key={category.name}>
            <FontAwesomeIcon
              icon={EMOTION_ICONS[result]}
              size={50}
              color={lightPurple}
            />
            <Text style={styles.text}>{category.name}</Text>
          </Card>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  text: {
    fontSize: 25,
    marginLeft: 20,
    color: darkPurple,
  },
});

export default Trends;
