import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen")

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        height: "5%",
        paddingHorizontal: 15,
        width: "100%"
    },
    backButton: {
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontFamily: "poppins-light",
        fontSize: 20,
        marginTop: 2
    },
    topContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "65%",
    },
    posterContainer: {
        width: height / (3 * 1.2),
        height: height / (2 * 1.2),
    },
    gradient: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    poster: {
        flex: 1,
        resizeMode: "cover",
        borderRadius: 10
    },
    contentContainer: {
        width: "100%",

        position: "absolute",
        bottom: 0,
        zIndex: 30
    },
    horizontalLine: {
        marginTop: 20,
        width: '30%',
        alignSelf: "center",
        height: 5,
        borderRadius: 10,
    },
    filmName: {
        fontFamily: "poppins-regular",
        fontSize: 24,
        marginTop: 10,
        alignSelf: "center"
    },
    rankingContainer: {
        marginTop: 10,
        flexDirection: "row",
        gap: 5,
        alignSelf: "center",
    },
    rankingText: {
        fontFamily: "poppins-bold",
        fontSize: 24,
    },
    starImageContainer: {
        width: 30,
        height: 30
    },
    starImage: {
        width: "100%",
        height: "100%",
    },
    scrollIcon: {
        alignSelf: "center"
    },

    content: {
        width: "100%",
        marginTop: 20,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    playerContainer: {
        width: "100%",
        height: height * 0.25
    },
    informText: {
        marginTop: 10,
        fontFamily: "poppins-regular",
        fontSize: 16,
        flexWrap: "wrap",
        width: "40%",
        textAlign: "center",
        alignSelf: "center"
    },
    title: {
        fontFamily: "poppins-regular",
        fontSize: 24,
        marginTop: 10,
        alignSelf: "flex-start"
    },
    synopsis: {
        fontFamily: "poppins-light",
        fontSize: 18,
    },
    readMoreText: {
        fontFamily: "poppins-light",
        fontSize: 16,
        textDecorationLine: "underline",
        alignSelf: "flex-end"
    },
    actorsText: {
        width: "70%",
        fontFamily: "poppins-light",
        fontSize: 18,
    },
    textContainer: {
        height: "50%"
    },
    reviewsTitle: {
        fontFamily: "poppins-regular",
        fontSize: 24,
        marginTop: 30,
        alignSelf: "center"
    },
    reviewsContainer: {
        paddingHorizontal: 10
    },
    reviewsText: {
        fontFamily: "poppins-regular",
        fontSize: 16,
        flexWrap: "wrap",
        textAlign: "justify"
    },
    flatlistContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10
    },
    flatListContainer: {
        flex: 8,
    },
    flatList: {
        flex: 1
    },
    reviewsButtonContainer: {
        flex: 1,
    },
    reviewsButton: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5
    },
})