import React from 'react';
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import styles from './styles';
import { ligthTheme } from '@/theme';

interface CustomTabBarProps {
    state: any;
    descriptors: any;
    navigation: any;
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({ state, descriptors, navigation }) => {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    return (
        <View style={styles.tabBar}>
            {state.routes.map((route: any, index: number) => {
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        activeOpacity={1}
                        key={route.key}
                        onPress={onPress}
                        style={[styles.tabItem, { backgroundColor: theme.customUpperTabButton.backgroundColor },]}
                    >
                        <Text style={[{
                            color: isFocused ?
                                theme.customUpperTabButton.activeColor :
                                theme.customUpperTabButton.color
                        }, styles.tabText]}>
                            {route.name}
                        </Text>
                        <View style={[{
                            backgroundColor: isFocused ?
                                theme.customUpperTabButton.activeColor :
                                theme.customUpperTabButton.color
                        }, styles.tabIndicator]}/>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};


export default CustomTabBar;