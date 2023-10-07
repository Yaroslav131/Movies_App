import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import auth from '@react-native-firebase/auth';
import Route from '@/route/Route';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from '@/store/store';
import { useAppSelector } from '@/hooks';


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

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {!user ? <WelcomeScreen /> : <Route />}
      </GestureHandlerRootView>
    </Provider>
  );
}


export default App;
