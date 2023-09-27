import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    topContainer: {
        flex: 1,

        justifyContent: "space-evenly"
    },
    bottomContainer: {
        flex: 1,
    },
    titleText: {
        fontFamily: "poppins-regular",
        fontSize: 28,
        marginLeft: 25
    },

    topicContainer: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    videoPlayerConatiner:{
        width: "90%",
        height: "60%",
        alignSelf: "center",
    }
})

export default styles;