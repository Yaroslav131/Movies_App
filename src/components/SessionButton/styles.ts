import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    sessionButtonContainer: {
        paddingHorizontal: 5,
        width: 170,
    },
    sessionButton: {
        flex: 1,
        borderRadius: 15,
        padding: 7,
        justifyContent:"space-evenly"
    },
    timeText: {
        fontFamily: "poppins-bold",
        fontSize: 14
    },
    cinemaText: {
        fontFamily: "poppins-light",
        fontSize: 14
    },
    seatsAvailableContainer: {
        flexDirection: "row",
        gap:5
    },
    seatsAvailableText: {
        fontFamily: "poppins-light",
        fontSize: 12,
    },
})