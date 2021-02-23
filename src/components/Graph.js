import {subDays, subMonths, subYears} from 'date-fns';
import React from 'react';
import {Defs, LinearGradient, Stop} from 'react-native-svg';
import {LineChart, Grid} from 'react-native-svg-charts';
import {EMOTION_NUMBERS, TIMESCALES} from '../constants';
import {darkPurple, lightPurple} from '../styles/colors';

const Gradient = () => (
  <Defs key={'gradient'}>
    <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
      <Stop offset={'0%'} stopColor={darkPurple} />
      <Stop offset={'100%'} stopColor={lightPurple} />
    </LinearGradient>
  </Defs>
);

const filterByTimescale = (timescale, data) => {
  let date = null;
  if (timescale === TIMESCALES.WEEK) {
    date = subDays(new Date(), 7);
  } else if (timescale === TIMESCALES.MONTH) {
    date = subMonths(new Date(), 1);
  } else {
    date = subYears(new Date(), 1);
  }

  return data.filter((record) => {
    return new Date(record.timestamp) > date;
  });
};

const Graph = ({timescale, data}) => {
  const dataToDisplay = filterByTimescale(timescale, data);
  const formattedData = dataToDisplay.map(
    (record) => EMOTION_NUMBERS[record.emotion],
  );
  console.log(dataToDisplay)
  return (
    <LineChart
      style={{height: 300, width: '100%'}}
      data={formattedData}
      animate
      contentInset={{top: 20, bottom: 20}}
      svg={{
        strokeWidth: 2,
        stroke: 'url(#gradient)',
      }}>
      <Grid />
      <Gradient />
    </LineChart>
  );
};

export default Graph;
