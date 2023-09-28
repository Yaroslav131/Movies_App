import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    playerConatiner: {
        flex: 1
    },
    playerWrapper: {
        flex: 1,

    },
    player: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
 
    },
    poster: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 2,
        justifyContent: "center",
        alignItems: "center",
    
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

    centerButtonContainer: {
        gap:10,
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