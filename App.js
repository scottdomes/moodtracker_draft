import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './src/components/Header';
import NavigationIcon from './src/components/NavigationIcon';
import Screen from './src/components/Screen';
import {faHome, faPoll, faUser} from '@fortawesome/free-solid-svg-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const TabBar = ({navigation, state}) => {
  ICONS = {
    Home: faHome,
    Trends: faPoll,
    Profile: faUser,
  };
  return (
    <View style={styles.footer}>
      {state.routeNames.map((routeName, index) => {
        return (
          <NavigationIcon
            key={routeName}
            icon={ICONS[routeName]}
            onPress={() => navigation.navigate(routeName)}
            isActive={index === state.index}
          />
        );
      })}
    </View>
  );
};

const HomeScreen = () => <Screen name="Home" />;
const TrendsScreen = () => <Screen name="Trends" />;
const ProfileScreen = () => <Screen name="Profile" />;

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" tabBar={TabBar}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Trends" component={TrendsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
