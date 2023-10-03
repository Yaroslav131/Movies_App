import { View, TouchableOpacity, Image, Text, useColorScheme, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./styles";

import { IMAGES } from "@assets/images";
import { ligthTheme } from "@/theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootRouteProps, StackNavigation } from "@/route/TopFilmStack";
import { FILM_RATING } from "@/constants";
import { ImageColorsResult, getColors } from 'react-native-image-colors'
import { useEffect, useState } from "react";
import { useImageColors } from "@/hooks";

function DetailTopScreen() {
    const route = useRoute<RootRouteProps<'Details'>>();

    const movie = route.params.moive
    const navigation = useNavigation<StackNavigation>();
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    const colors = useImageColors(movie.image, theme.detailTopScreen.backgroundColor)

    console.log(colors)

    return (
        <View style={[styles.container,
        { backgroundColor: theme.detailTopScreen.backgroundColor }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Image source={IMAGES.backButton} />
                </TouchableOpacity>

                <Text style={[styles.headerText,
                { color: theme.detailTopScreen.color }]}>
                    {FILM_RATING}
                </Text>
            </View>

            <View style={styles.posterContainer}>

            </View>
            <View style={styles.contentContainer}>

            </View>
        </View >
    );
}

export default DetailTopScreen;