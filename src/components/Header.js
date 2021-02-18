import React from 'react';
import {StyleSheet, ImageBackground, Text, View} from 'react-native';

const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img/background.png')}
        style={styles.image}>
        <View>
          <Text style={styles.text}>{text}</Text>
        </View>
      </ImageBackground>
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
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default Header;
