import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    playerConatiner: {
        width: "90%",
        height: "60%",
        alignSelf: "center",

    },
    playerWrapper: {
        flex: 1,

    },
    player: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    poster: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex:2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    posterImage: {
        resizeMode: "stretch"
    },
    buttonsConatiner: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 5,
    },
    topButtons: {
        backgroundColor: 'transparent',
        position: "absolute",
        top: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        width: "100%",
        zIndex: 15,
    },
    title: {
        fontSize: 22,
        fontFamily: "poppins-regular",
        color: "#FFF"
    },
    shareButton: {

        justifyContent: "center",
        alignItems: "center"
    },
    buyTicktButton: {
        flexDirection: "row",
        position: "absolute",
        bottom: 15,
        right: 30,
        gap: 2,
        zIndex: 15
    },
    ticketImage: {
        resizeMode: "cover",
        marginTop: 1
    },
    buyTicktText: {
        fontSize: 14,
        fontFamily: "poppins-light",
        color: "#FFF"
    },
    playButtonContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    playButton: {
        justifyContent: "center",
        alignItems: "center"
    },
    playImage: {
        position: "absolute",
        zIndex: 5
    }
})

export default styles;