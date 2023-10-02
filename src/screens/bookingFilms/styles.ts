import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("screen").width

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "space-evenly"
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },

    backButton: {
        flex: 1,
        marginBottom: 6
    },
    headerTextContainer: {
        flex: 9,
    },
    headerText: {
        fontFamily: "poppins-regular",
        fontSize: 22
    },

    title: {
        fontFamily: "poppins-regular",
        fontSize: 24
    },
    scheduleContainer: {
        marginVertical: 15
    },
    datepickerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dateTitle: {
        fontFamily: "poppins-light",
        fontSize: 18
    },
    flatList: {
        width: "100%",
        minHeight: 80,
        maxHeight: 100,
    },
    screenText: {
        fontFamily: "poppins-regular",
        fontSize: 20,
        alignSelf: "center"
    },
    seatButon: {
        width: width * 0.075,
        height: width * 0.075,
        margin: 5,
        borderRadius: 5
    },
    seatContainer: {
        maxHeight: "50%",
    },
    seatWebContainer: {
        flexDirection: "row",
    },
    leftFlatListContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    rightFlatListContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    seatButtonsConainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 15
    },
    bottomContainer: {
        flexDirection: "row",
    },
    priceContainer: {
        flex: 1
    },
    seatsCounter: {
        fontFamily: "poppins-light",
        fontSize: 18
    },
    priceText: {
        fontFamily: "poppins-bold",
        fontSize: 18
    },
    buyButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    buyButtonText: {
        fontFamily: "poppins-bold",
        fontSize: 18
    }
})