import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TicketScreen from '@/screens/TicketScreen';
import CustomTabBar from '@/components/CustomUpperTabButton';

const Tab = createMaterialTopTabNavigator();

function TicketRoute() {
  return (
    <Tab.Navigator
      initialRouteName="upcoming"
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="upcoming"
        component={TicketScreen}
        options={() => ({
          tabBarShowLabel: false,
        })}
        initialParams={{ type: 'upcoming' }}
      />
      <Tab.Screen
        name="past"
        component={TicketScreen}
        options={() => ({
          tabBarShowLabel: false,
        })}
        initialParams={{ type: 'past' }}
      />
      <Tab.Screen
        name="missed"
        component={TicketScreen}
        options={() => ({
          tabBarShowLabel: false,
        })}
        initialParams={{ type: 'missed' }}
      />
    </Tab.Navigator>
  );
}

export default TicketRoute;
