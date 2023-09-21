import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },

    topContainer: {
        flex: 1,
        justifyContent: "space-evenly"
    },
    bottomContainer: {
        flex: 1
    },
    titleText: {
        fontFamily: "poppins-regular",
        fontSize: 28,
        marginLeft:15
    },

    topicContainer: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: "wrap"
    }
})

export default styles;