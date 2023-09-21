import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import TopFilmStack from './TopFilmStack';
import BookingFilms from '@/screens/bookingFilms';
import ProfileScreen from '@/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function Route() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="TopFilm" component={TopFilmStack} />
            <Tab.Screen name="BookingFilms" component={BookingFilms} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default Route;