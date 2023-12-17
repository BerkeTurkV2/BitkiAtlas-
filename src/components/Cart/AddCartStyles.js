import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    leftBox: {
        flex: 2,
    },
    rightBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 30,
    },
    leftUnderBox: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    image: {
        flex: 1,
        height: 100,
        width: 60,
        margin: 10,
    },
    plantName: {
        fontSize: 20,
        color: "#376a4f",
        fontWeight: "bold",
        marginRight: 20,
    },
    price: {
        fontSize: 18,
        color: "#376a4f",
        fontWeight: "bold",
        marginRight: 16,
    },
    number: {
        fontSize: 16,
        marginHorizontal: 10,
        color: "black",
    },
})