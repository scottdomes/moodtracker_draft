import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Card from '../components/Card';
import {EMOTIONS, EMOTION_ICONS} from '../constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { darkPurple, lightPurple } from '../styles/colors';

const TREND_CATEGORIES = [
  {
    name: 'Most common mood',
    determiner: (data) => EMOTIONS.GREAT,
  },
  {
    name: 'Average mood',
    determiner: (data) => EMOTIONS.GOOD,
  },
  {
    name: 'Least common mood',
    determiner: (data) => EMOTIONS.SAD,
  },
  {
    name: 'Average this week',
    determiner: (data) => EMOTIONS.GOOD,
  },
  {
    name: 'Average last week',
    determiner: (data) => EMOTIONS.MEH,
  },
];

const Trends = () => {
  return (
    <>
      {TREND_CATEGORIES.map((category) => {
        const result = category.determiner();
        return (
          <Card containerStyles={styles.card}>
            <FontAwesomeIcon icon={EMOTION_ICONS[result]} size={50} color={lightPurple} />
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
    marginBottom: 25
  },
  text: {
    fontSize: 25,
    marginLeft: 20,
    color: darkPurple
  }
});

export default Trends;
