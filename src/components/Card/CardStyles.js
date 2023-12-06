import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        width: Dimensions.get("screen").width / 3,
        alignItems: "center",
    },
    box: {
        width: Dimensions.get("screen").width / 4,
        borderWidth: 0.5,
        elevation: 12,
        borderRadius: 16,
        marginTop: 10,
        alignItems: "center",
        backgroundColor: "#dce2e5" //#b8d5c6
    },
    image: {
        height: 100,
        width: 60,
    },
    plantName: {
        marginTop: 5,
        color: "#376a4f",
        fontWeight: "bold"
    }
});