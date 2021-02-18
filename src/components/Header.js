import React from 'react';
import {StyleSheet, ImageBackground, Text, View} from 'react-native';

const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img/background.png')}
        style={styles.image}></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: 100,
  },
});

export default Header;
