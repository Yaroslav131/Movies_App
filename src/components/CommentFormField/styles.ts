import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 15
    },
    commentContainer: {
        flexDirection: "row",

        gap: 15
    },

    input: {
        flex: 9,
        fontSize: 16,
        fontFamily: "poppins-light",
        borderBottomWidth: 0.5,

    },
    errorStyle: {
        fontSize: 14,
        fontFamily: "poppins-light",
        color: "red"
    }
}
)
export default styles