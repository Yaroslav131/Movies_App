import DetailTopScreen from "@/screens/DetailTopScreen";
import TopFilmsScreen from "@/screens/TopFilmsScreen";
import { TopMovie } from "@/types";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
    TopFilm: undefined;
    Details: { moive: TopMovie };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
    RootStackParamList,
    RouteName
>;

export type StackNavigation = NavigationProp<RootStackParamList>;

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