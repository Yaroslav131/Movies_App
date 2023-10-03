import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    playerContainer: {
        width: "100%",
        height: "40%"
    },
    container: {
        flex: 1,
    },
    descriptionContainer: {
        width: "100%",
        height: "60%"
    },
    descriptionContant: {
        paddingTop: 15,
        paddingHorizontal: 30,
        flex: 1,
    },
    buyTickerButton: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10
    },
    buyTickerButtonText: {
        fontFamily: "poppins-bold",
        fontSize: 16
    },

    buttonImage: {
        marginBottom: 1
    },
    gradient: {
        height: 60,
        width: "100%",
        position: "absolute",
        bottom: 0,
        zIndex: 40
    },
    backButton: {
        position: "absolute",
        left: 20,
        top: 20,
        zIndex: 20
    },
    title: {
        fontFamily: "poppins-regular",
        fontSize: 22
    },
    synopsis: {
        fontFamily: "poppins-light",
        fontSize: 16,
    },
    commentsContainer: {
        marginVertical: 15
    },
    commentsCounter: {
        fontFamily: "poppins-regular",
        fontSize: 16
    },
    flatList: {
        width: "100%",
        height: "100%"
    },
    commemtContainer: {
        width: "100%",

    },
    leftContainer: {
        flexDirection: "row",
        gap: 5,
        flex: 1
    },
    iconText: {
        fontFamily: "poppins-regular",
        fontSize: 18
    },
    rigthContainer: {
        flex: 5
    },
    fieldContainer: {

    }
})