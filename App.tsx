import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import WelcomeScreen from './src/screens/welcomeScreen';


function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <WelcomeScreen />
  );
}



export default App;
