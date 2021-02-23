import React from 'react';
import {Defs, LinearGradient, Stop} from 'react-native-svg';
import {LineChart, Grid} from 'react-native-svg-charts';
import {darkPurple, lightPurple} from '../styles/colors';

const Gradient = () => (
  <Defs key={'gradient'}>
    <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
      <Stop offset={'0%'} stopColor={darkPurple} />
      <Stop offset={'100%'} stopColor={lightPurple} />
    </LinearGradient>
  </Defs>
);

const Graph = ({timescale, data}) => {
  const DATA = {
    YEAR: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
    MONTH: [70, 20, 40, 120, -4, -24, 85, 91, 25, 53, -53, 24, 50, -20, -80],
    WEEK: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
  };

    console.log(data)
  return (
    <LineChart
      style={{height: 300, width: '100%'}}
      data={data}
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
