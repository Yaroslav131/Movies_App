import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20
    },
    searchContainer: {
        width: "100%",
        gap: 10,
        flexDirection: "row",
        alignSelf: "center",
        paddingHorizontal: 15,
        borderRadius: 50
    },
    headerImageContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    textInputContainer: {
        flex: 8
    },
    textInput: {
        fontFamily: "poppins-regular",
        fontSize: 18,
        marginTop: 5
    },
    flatList: {
        alignSelf: "center",
        width: "100%",
        height: "80%"
    },
})

export default styles;