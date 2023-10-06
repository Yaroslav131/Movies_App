import { View, Text, Image, TouchableOpacity, useColorScheme } from "react-native";
import styles from "./styles";
import { IMAGES } from "@assets/images";
import { AUTHORS, GENRE, MORE, } from "@/constants";
import { toUpperCase } from "@/helpingFunctions";
import { TopMovie } from "@/types";
import { ligthTheme } from "@/theme";
import { StackNavigation } from "@/route/TopFilmStack";
import { useNavigation } from "@react-navigation/native";


function TopFilmFlatListItem(item: TopMovie) {
    const navigation = useNavigation<StackNavigation>();
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    return (
        <View style={styles.movieItemContainer}>
            <View style={styles.posterContainer}>
                <Image style={styles.poster} source={{ uri: item.image }} />
            </View>

            <View style={styles.informContainer}>
                <Text style={[styles.filmTitle,
                { color: theme.topScreen.color }]}>
                    {toUpperCase(`${item.rank}. ${item.title}`)}
                </Text>
                <Text style={[styles.description,
                { color: theme.topScreen.color }]}>
                    {GENRE}: {item.genre.join(", ")}
                </Text>
                <Text style={[styles.description,
                { color: theme.topScreen.color }]}>
                    {AUTHORS}: {item.director.join(", ")}
                </Text>
                <View style={styles.runkContainer}>
                    <Text style={[styles.filmTitle,
                    { color: theme.topScreen.color }]}>
                        {item.rating}
                    </Text>
                    <View style={styles.runkContainer}>
                    <Image style={styles.starImageContainer} source={IMAGES.starIcon} />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Details", { moive: item })}
                    style={[styles.moreButton,
                    { backgroundColor: theme.topScreen.moreButton }]}>
                    <Text style={[styles.moreButtonText,
                    { color: theme.topScreen.color }]}>
                        {MORE}</Text>
                    <Image source={IMAGES.arrowMore} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default TopFilmFlatListItem;