import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    imageStyle: {
        resizeMode: "cover"
    },
    imageContainer: {
        justifyContent: "flex-end",
        alignItems: "center",

        flex: 3
    },
    dotContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1
    }
})