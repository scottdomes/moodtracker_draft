import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './src/components/Header';
import NavigationIcon from './src/components/NavigationIcon';
import {faHome, faPoll, faUser} from '@fortawesome/free-solid-svg-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

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

const Layout = ({screenName}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header text={screenName} />
    </View>
  );
};

const HomeScreen = () => <Layout screenName="Home" />;
const TrendsScreen = () => <Layout screenName="Trends" />;
const ProfileScreen = () => <Layout screenName="Profile" />;

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={TabBar}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Trends" component={TrendsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
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
