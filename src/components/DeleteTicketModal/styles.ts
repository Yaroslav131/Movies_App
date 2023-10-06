import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '80%',
        elevation: 5,
        borderRadius: 15,
        paddingVertical: 20,
      
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20
    },
    textContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        fontFamily: "poppins-regular",
        fontSize: 22
    },
    cancelContainer: {
        alignItems: "center",
        justifyContent: "center"
    },

    buttonStyle: {
        marginTop: 15,
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10
    },
    submitText: {
        fontFamily: "poppins-bold",
        fontSize: 20
    },
})

export default styles;