import React, { useEffect, useState } from 'react';
import { StatusBar, Appearance } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import WelcomeScreen from './src/screens/welcomeScreen';
import auth from '@react-native-firebase/auth';
import { ligthTheme } from '@/theme';

function App(): JSX.Element {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    SplashScreen.hide();

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return <></>;

  const theme = Appearance.getColorScheme()

  const background = theme === "light" ? ligthTheme.statusBar.color
    : ligthTheme.statusBar.color

  // if (!user) {
  return (
    <>
      <StatusBar backgroundColor={background} 
      barStyle={theme === "light" ? "light-content" : "light-content"} />
      <WelcomeScreen />
    </>
  );
  // }

  // return (
  //   <View>
  //     <Text>Welcome {user.email}</Text>
  //   </View>
  // );
}


export default App;
