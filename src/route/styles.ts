import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("screen").height

export const styles = StyleSheet.create({
    tabBar: {
        height: height * 0.08,
       
    }
})