import { Movie } from '@/types';
import { NavigationProp, RouteProp } from '@react-navigation/native';

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