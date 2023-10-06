import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TicketScreen from '@/screens/TicketScreen';
import CustomTabBar from '@/components/CustomUpperTabButton';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { TicketFilterType } from '@/types';

const Tab = createMaterialTopTabNavigator();

export type RootParamList = {
    upcoming: { type: TicketFilterType };
};

export type RootRouteProps<RouteName extends keyof RootParamList> = RouteProp<
RootParamList,
    RouteName
>;

export type TabNavigation = NavigationProp<RootParamList>;

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
                initialParams={{ type: "upcoming" }} />
            <Tab.Screen
                name="past"
                component={TicketScreen}
                options={() => ({
                    tabBarShowLabel: false,
                })}
                initialParams={{ type: "past" }} />
            <Tab.Screen
                name="missed"
                component={TicketScreen}
                options={() => ({
                    tabBarShowLabel: false,
                })}
                initialParams={{ type: "missed" }} />
        </Tab.Navigator>
    );
}

export default TicketRoute;
