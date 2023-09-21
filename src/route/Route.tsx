import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import TopFilmStack from './TopFilmStack';
import BookingFilms from '@/screens/BookingFilms';
import ProfileScreen from '@/screens/ProfileScreen';
import { IMAGES } from '@assets/images';
import CustomTabButton from '@/components/CustomTabButton';
import { styles } from './styles';
import { useColorScheme } from 'react-native';
import { ligthTheme } from '@/theme';

const Tab = createBottomTabNavigator();

function Route() {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: [styles.tabBar,
                    {
                        backgroundColor: theme.tabNavigation.backgroundColor,
                        borderColor: theme.tabNavigation.backgroundColor
                    }],
                }}
                initialRouteName="Home"
            >
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <CustomTabButton
                                userIcon={false}
                                choosenImage={IMAGES.choseHomeTab}
                                image={IMAGES.homeTab}
                                focused={focused}
                            />
                        ),
                    }}
                    name="Home"
                    component={HomeStack} />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <CustomTabButton
                                userIcon={false}
                                choosenImage={IMAGES.chosenAwardTab}
                                image={IMAGES.awardTab}
                                focused={focused}
                            />
                        ),
                    }}
                    name="TopFilm"
                    component={TopFilmStack} />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <CustomTabButton
                                userIcon={false}
                                choosenImage={IMAGES.chosenTiicketTab}
                                image={IMAGES.ticketTab}
                                focused={focused}
                            />
                        ),
                    }}
                    name="BookingFilms"
                    component={BookingFilms} />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <CustomTabButton
                                userIcon={true}
                                choosenImage={IMAGES.chosenUserTab}
                                image={IMAGES.userTab}
                                focused={focused}
                            />
                        ),
                    }}
                    name="ProfileScreen"
                    component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Route;