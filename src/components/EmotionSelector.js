import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Card from '../components/Card';
import {darkPurple, lightGrey, yellow, lightPurple} from '../styles/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {EMOTIONS, EMOTION_ICONS} from '../constants';

const EmotionSelector = () => {
  const [currentEmotion, setEmotion] = useState(null);
  return (
    <Card>
      <Text style={styles.greeting}>How are you today?</Text>
      <View style={styles.emotionsContainer}>
        {Object.keys(EMOTIONS).map((emotion) => {
          const isActive = currentEmotion === emotion;
          return (
            <TouchableOpacity onPress={() => setEmotion(emotion)} key={emotion}>
              <View
                style={
                  isActive
                    ? {...styles.emotion, ...styles.activeEmotion}
                    : styles.emotion
                }>
                <FontAwesomeIcon
                  icon={EMOTION_ICONS[emotion]}
                  size={50}
                  style={
                    isActive ? styles.activeEmotionIcon : styles.emotionIcon
                  }
                />
                <Text
                  style={
                    isActive
                      ? {...styles.emotionLabel, ...styles.activeEmotionLabel}
                      : styles.emotionLabel
                  }>
                  {emotion}
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
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  emotion: {
    padding: 10,
    borderRadius: 20,
  },
  activeEmotion: {
    backgroundColor: lightPurple,
  },
  emotionIcon: {
    color: lightGrey,
  },
  activeEmotionIcon: {
    color: yellow,
  },
  emotionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
    marginTop: 10,
    color: darkPurple,
  },
  activeEmotionLabel: {
    color: 'white',
  },
});

export default EmotionSelector;
