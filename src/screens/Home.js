import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Card from '../components/Card';
import {darkPurple, lightGrey} from '../styles/colors';
import {
  faLaughSquint,
  faSmile,
  faMeh,
  faFrown,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const EMOTIONS = {
  SAD: 'SAD',
  MEH: 'MEH',
  GOOD: 'GOOD',
  GREAT: 'GREAT',
};

const EMOTION_ICONS = {
  SAD: faFrown,
  MEH: faMeh,
  GOOD: faSmile,
  GREAT: faLaughSquint,
};

const Home = () => {
  return (
    <Card>
      <Text style={styles.greeting}>How are you today?</Text>
      <View style={styles.emotionsContainer}>
        {Object.keys(EMOTIONS).map((emotion) => {
          return (
            <View style={styles.emotion}>
              <FontAwesomeIcon
                icon={EMOTION_ICONS[emotion]}
                size={70}
                style={styles.emotionIcon}
              />
              <Text style={styles.emotionLabel}>{emotion}</Text>
            </View>
          );
        })}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  greeting: {
    color: darkPurple,
    fontSize: 25,
    fontWeight: '600',
  },
  emotionsContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emotionIcon: {
    color: lightGrey,
  },
  emotionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
    marginTop: 10,
    color: darkPurple
  },
});

export default Home;
