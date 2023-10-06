import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("screen").height

const itemHeight = height * 0.17

const styles = StyleSheet.create({
  
    itemContainer: {
        width: "100%",
        flexDirection: "row",
        borderRadius: 15,
        height: itemHeight,
        marginVertical: 15,
        gap: 15
    },
    imageContainer: {
        width: itemHeight / 1.4,
        borderRadius: 10
    },
    image: {
        flex: 1,
        resizeMode: "stretch",
        borderRadius: 15,
    },
    informContainer: {
        flex: 1,
        paddingVertical: 5,
        justifyContent: "space-between"
    },
    title: {
        fontFamily: "poppins-bold",
        fontSize: 20
    },
    dateText: {
        fontFamily: "poppins-light",
        fontSize: 16
    },
    ticketIdContainer: {
        flexDirection: "row",
        gap: 3
    },
    ticketImage: {
        marginBottom: 1
    },
    ticketIdText: {
        fontFamily: "poppins-light",
        fontSize: 14
    },
    line: {
        height: 1,
        borderRadius: 5,
        width: "80%"
    },
    bottomContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 15
    },

    seatsText: {
        fontFamily: "poppins-light",
        fontSize: 12
    },
    priceText: {
        fontFamily: "poppins-regular",
    },
    cancelButtonContainer: {
        alignItems: "center",
        justifyContent: "flex-end",
    },
    seatsContainer: {
        paddingTop: 5
    },
    cancelButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 50
    },
    cancelText: {
        fontFamily: "poppins-regular",
        fontSize: 14,
    }
})

export default styles;