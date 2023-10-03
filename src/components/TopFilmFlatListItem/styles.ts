import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    posterContainer: {
        flex: 1
    },
    poster: {
        borderRadius: 10,
        flex: 1
    },
    informContainer: {
        justifyContent: "space-between",    
        paddingVertical: 5,
        flex: 2
    },
    movieItemContainer: {
        gap: 15,
        flexDirection: "row",
        minHeight: 200,
        marginVertical: 15,
    },
    filmTitle: {
        fontFamily: "poppins-bold",
        fontSize: 18
    },
    description: {
        fontFamily: "poppins-light",
        fontSize: 16
    },
    runkContainer: {
        flexDirection: "row",
        gap: 3,
    },
    moreButton: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        padding: 5,
        width: "30%",
        justifyContent: "center",
        borderRadius: 5
    },
    moreButtonText: {
        marginTop: 2,
        fontFamily: "poppins-regular",
        fontSize: 16
    }
})

export default styles;