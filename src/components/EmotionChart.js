import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Card from '../components/Card';
import {darkPurple, lightPurple} from '../styles/colors';
import {lightShadow} from '../styles/shadows';
import Graph from './Graph';
import database from '@react-native-firebase/database';
import {TIMESCALES, EMOTION_NUMBERS} from '../constants';
import {onLoadEmotions} from '../utils/db';

const EmotionChart = ({user}) => {
  const [currentTimescale, setTimescale] = useState(TIMESCALES.WEEK);
  const [moods, setMoods] = useState([]);

  const reference = database().ref(`/users/${user.uid}/moods/`);
  useEffect(() => {
    const onValueChange = onLoadEmotions(reference, (moods) => {
      setMoods(moods);
    });

    // Stop listening for updates when no longer required
    return () => reference.off('value', onValueChange);
  }, [user]);

  return (
    <Card containerStyles={styles.card}>
      <Graph timescale={currentTimescale} data={moods} />
      <View style={styles.timescaleSelector}>
        {Object.keys(TIMESCALES).map((timescale) => {
          const isActive = timescale === currentTimescale;
          return (
            <TouchableOpacity
              key={timescale}
              onPress={() => setTimescale(timescale)}>
              <View style={isActive ? styles.activeTimescaleContainer : {}}>
                <Text
                  style={
                    isActive
                      ? {
                          ...styles.timescaleLabel,
                          ...styles.activeTimescaleLabel,
                        }
                      : styles.timescaleLabel
                  }>
                  {timescale}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {alignItems: 'center', marginTop: 30},
  timescaleSelector: {
    ...lightShadow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 25,
    width: '80%',
  },
  activeTimescaleContainer: {
    backgroundColor: lightPurple,
    borderRadius: 25,
  },
  timescaleLabel: {
    fontSize: 18,
    marginVertical: 15,
    marginHorizontal: 18,
    color: darkPurple,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  activeTimescaleLabel: {
    color: 'white',
  },
});

export default EmotionChart;
