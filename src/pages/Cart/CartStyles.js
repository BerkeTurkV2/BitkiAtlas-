import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    cartTitle: {
        alignSelf: "center",
        margin: 10,
        fontSize: 22,
        color: "black",
        fontWeight: "bold",
    },
    cartBox: {
        flex: 1,
        borderWidth: 0.6,
        borderRadius: 16,
        borderColor: "#376a4f",
        marginHorizontal: 10,
    },
    cartUnderBox: {
        alignItems: "center",
        backgroundColor: "#dce2e5",
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    totalPrice: {
        fontSize: 18,
        padding: 20,
    },
    addressTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 10,
        color: "black",
    },
    address: {
        margin: 10,
        color: "black",
    },
    newAdress: {
        marginTop: 6,
        marginLeft: 10,
        color: "#376a4f",
    },
    paymentBox: {
        alignSelf: "center",
        marginVertical: 20,
        borderRadius: 16,
        backgroundColor: "#376a4f",
        width: Dimensions.get("screen").width / 3,
    },
    payment: {
        fontSize: 16,
        color: "white",
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: "center",
    }
})