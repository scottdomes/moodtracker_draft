import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

import {SCREENS} from './src/constants';
import AuthScreenContainer from './src/screens/AuthScreenContainer';
import MainScreenContainer from './src/screens/MainScreenContainer';

const App = () => {
  const [currentScreen, setScreen] = useState(SCREENS.SIGNUP);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (user) {
      setScreen(SCREENS.HOME);
    } else {
      setScreen(SCREENS.LOGIN);
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (
    currentScreen === SCREENS.LOGIN ||
    currentScreen === SCREENS.FORGOT ||
    currentScreen === SCREENS.SIGNUP
  ) {
    return (
      <AuthScreenContainer
        currentScreen={currentScreen}
        setScreen={setScreen}
      />
    );
  }

  return (
    <MainScreenContainer currentScreen={currentScreen} setScreen={setScreen} />
  );
};

export default App;
