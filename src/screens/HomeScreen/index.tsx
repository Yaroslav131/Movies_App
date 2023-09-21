import { Text, View, useColorScheme } from "react-native";
import styles from "./styles";
import { ligthTheme } from "@/theme";
import { COMING_SOON_TEXT } from "@/constants";

function HomeScreen() {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    return (
        <View style={[styles.container,
        { backgroundColor: theme.homeScreen.backgroundColor }]}>
            <View style={styles.topContainer}>
                <Text style={[styles.titleText,
                { color: theme.homeScreen.color }]}>
                    {COMING_SOON_TEXT}
                </Text>
                <View style={styles.playerContainer}>

                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={[styles.titleText,
                { color: theme.homeScreen.color }]}>
                    {COMING_SOON_TEXT}
                </Text>
                <View style={styles.playerContainer}>

                </View>
            </View>
        </View>
    );
}

export default HomeScreen;