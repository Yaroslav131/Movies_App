import { NavigationProp, RouteProp } from '@react-navigation/native';
import {TopMovie } from '@/types';

export type RootStackParamList = {
    TopFilm: undefined;
    Details: { moive: TopMovie };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
    RootStackParamList,
    RouteName
>;

export type StackNavigation = NavigationProp<RootStackParamList>;

