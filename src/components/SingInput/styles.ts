import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "80%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 15,
        gap: 15,
    },
    imageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop:5
    },
    image: {
        resizeMode: "cover"
    },

    input: {
        flex: 9,
        fontSize: 20,
        fontFamily: "poppins-light",
        borderBottomWidth: 1,
    }
}
)
export default styles