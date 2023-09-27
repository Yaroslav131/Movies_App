import BookingFilms from "@/screens/BookingFilms";
import DetailScreen from "@/screens/DetailsScreen";
import HomeScreen from "@/screens/HomeScreen";
import { Movie } from "@/types";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Details: { moive: Movie };
    Booking: { moive: Movie };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
    RootStackParamList,
    RouteName
>;

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
            <Stack.Screen name="Booking" component={BookingFilms} />
        </Stack.Navigator>
    );
}

export default HomeStack;