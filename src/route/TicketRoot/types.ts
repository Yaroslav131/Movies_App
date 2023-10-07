import {  TicketFilterType } from '@/types';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export type RootParamList = {
    upcoming: { type: TicketFilterType };
};

export type RootRouteProps<RouteName extends keyof RootParamList> = RouteProp<
RootParamList,
    RouteName
>;

export type TabNavigation = NavigationProp<RootParamList>;