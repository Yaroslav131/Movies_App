import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("screen").width

export const styles = StyleSheet.create({
    commemtContainer: {
        width: "100%",
        marginVertical: 15,
        flexDirection: "row",
        gap: 15
    },
    leftContainer: {
        flexDirection: "row",
        gap: 2,
        width: width * 0.12,
        height: width * 0.12,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    iconText: {
        fontFamily: "poppins-regular",
        fontSize: 20
    },
    rigthContainer: {
        width: "100%",
    },
    topContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    nameText: {
        fontFamily: "poppins-regular",
        fontSize: 18
    },
    timeText: {
        fontSize: 14,
        fontFamily: "poppins-light",
    },
    bottomContainer: {

    },
    commentText: {
        fontSize: 16,
        fontFamily: "poppins-light",
    },
})