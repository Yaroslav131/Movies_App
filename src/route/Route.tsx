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
import TicketRoute from './TicketRoute';

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
                initialRouteName="HomeStack"
            >
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <CustomTabButton
                                choosenImage={IMAGES.choseHomeTab}
                                image={IMAGES.homeTab}
                                focused={focused}
                            />
                        ),
                    }}
                    name="HomeStack"
                    component={HomeStack} />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <CustomTabButton
                                choosenImage={IMAGES.chosenAwardTab}
                                image={IMAGES.awardTab}
                                focused={focused}
                            />
                        ),
                    }}
                    name="TopFilmStack"
                    component={TopFilmStack} />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <CustomTabButton
                                choosenImage={IMAGES.chosenTiicketTab}
                                image={IMAGES.ticketTab}
                                focused={focused}
                            />
                        ),
                    }}
                    name="TicketsStack"
                    component={TicketRoute} />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <CustomTabButton
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