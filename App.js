import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './src/components/Header';
import NavigationIcon from './src/components/NavigationIcon';
import {faHome, faPoll, faUser} from '@fortawesome/free-solid-svg-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

const Layout = ({screenName}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header text={screenName} />
      <View style={styles.footer}>
        <NavigationIcon
          icon={faHome}
          onPress={() => navigation.navigate('Home')}
          isActive={screenName === 'Home'}
        />
        <NavigationIcon
          icon={faPoll}
          onPress={() => navigation.navigate('Trends')}
          isActive={screenName === 'Trends'}
        />
        <NavigationIcon
          icon={faUser}
          onPress={() => navigation.navigate('Profile')}
          isActive={screenName === 'Profile'}
        />
      </View>
    </View>
  );
};

const HomeScreen = () => <Layout screenName="Home" />;
const TrendsScreen = () => <Layout screenName="Trends" />;
const ProfileScreen = () => <Layout screenName="Profile" />;

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Trends" component={TrendsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  footer: {
    backgroundColor: 'white',
    height: 85,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingBottom: 20,
  },
});

export default App;
