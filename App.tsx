import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import WelcomeScreen from './src/screens/welcomeScreen';
import auth from '@react-native-firebase/auth';

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

  // if (!user) {
    return (
      <WelcomeScreen />
    );
  // }

  // return (
  //   <View>
  //     <Text>Welcome {user.email}</Text>
  //   </View>
  // );
}


export default App;
