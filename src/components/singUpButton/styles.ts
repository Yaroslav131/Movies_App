import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
        height: 50,
        paddingHorizontal: 15,
        marginVertical: 15

    },
    buttonImageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    imageStyle: {

    },
    buttonTextContainer: {
        flex: 9,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 20,
        
        fontFamily: "inter-semiBold"
    }
})

export default styles;