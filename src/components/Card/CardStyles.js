import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        width: Dimensions.get("screen").width / 3,
        alignItems: "center",
    },
    box: {
        width: Dimensions.get("screen").width / 4,
        borderWidth: 1,
        elevation: 22,
        borderRadius: 16,
        marginTop: 10,
        alignItems: "center",
        backgroundColor: "#b8d5c6"
    },
    image: {
        height: 100,
        width: 60,
    }
});