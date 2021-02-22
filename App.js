import React, {useState} from 'react';
import {SCREENS} from './src/constants';
import AuthScreenContainer from './src/screens/AuthScreenContainer';
import MainScreenContainer from './src/screens/MainScreenContainer';

const App = () => {
  const [currentScreen, setScreen] = useState(SCREENS.LOGIN);

  if (
    currentScreen === SCREENS.LOGIN ||
    currentScreen === SCREENS.FORGOT ||
    currentScreen === SCREENS.SIGNUP
  ) {
    return <AuthScreenContainer currentScreen={currentScreen} />;
  }

  return (
    <MainScreenContainer currentScreen={currentScreen} setScreen={setScreen} />
  );
};

export default App;
