import database from '@react-native-firebase/database';
import {subMonths, subDays, subHours} from 'date-fns';
import {EMOTIONS} from '../constants';

const randomProperty = (obj) => {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

export const getRefString = (date) => {
  return `${date.getFullYear()}_${date.getMonth()}_${date.getDay()}_${date.getHours()}`;
};

const randomEmotion = () => {
  return randomProperty(EMOTIONS);
};

const createSeeds = (seeds, user) => {
  seeds.forEach((seed) => {
    database().ref(`/users/${user.uid}/moods/${seed.key}`).set({
      emotion: randomEmotion(),
      timestamp: seed.timestamp,
    });
  });
};

const seedPastMonth = (user) => {
  const currentDate = new Date();
  const seeds = [...Array(30).keys()].map((_value, i) => {
    const date = subDays(currentDate, i + 1);
    return {key: getRefString(date), timestamp: date};
  });

  createSeeds(seeds, user);
};

const seedPastWeek = (user) => {
  const currentDate = new Date();
  const seeds = [...Array(14).keys()].map((_value, i) => {
    const date = subHours(currentDate, 12 * (i + 1));
    return {key: getRefString(date), timestamp: date};
  });

  createSeeds(seeds, user);
};

const seedPastYear = (user) => {
  const currentDate = new Date();
  const seeds = [...Array(12).keys()].map((_value, i) => {
    const date = subMonths(currentDate, i + 1);
    return {key: getRefString(date), timestamp: date};
  });

  createSeeds(seeds, user);
};

export const seed = (user) => {
  seedPastYear(user);
  seedPastMonth(user);
  // seedPastWeek(user);
};
