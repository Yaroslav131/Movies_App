import BookingFilms from "@/screens/BookingFilms";
import DetailScreen from "@/screens/DetailsScreen";
import HomeScreen from "@/screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
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