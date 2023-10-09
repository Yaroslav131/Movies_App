import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailTopScreen from '@/screens/DetailTopScreen';
import TopFilmsScreen from '@/screens/TopFilmsScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function TopFilmStack() {
  return (
    <Stack.Navigator
      initialRouteName="TopFilm"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TopFilm" component={TopFilmsScreen} />
      <Stack.Screen name="Details" component={DetailTopScreen} />
    </Stack.Navigator>
  );
}

export default TopFilmStack;
