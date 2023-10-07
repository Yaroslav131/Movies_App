import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { IMAGES } from '@assets/images';
import HomeStack from './HomeStack/HomeStack';
import TopFilmStack from './TopFilmRoot/TopFilmStack';
import ProfileScreen from '@/screens/ProfileScreen';
import CustomTabButton from '@/components/CustomTabButton';
import { styles } from './styles';
import TicketRoute from './TicketRoot/TicketRoute';
import { useAppSelector } from '@/hooks';

const Tab = createBottomTabNavigator();

function Route() {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [styles.tabBar,
            {
              backgroundColor: theme.tabNavigation.backgroundColor,
              borderColor: theme.tabNavigation.backgroundColor,
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
          component={HomeStack}
        />
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
          component={TopFilmStack}
        />
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
          component={TicketRoute}
        />
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
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Route;
