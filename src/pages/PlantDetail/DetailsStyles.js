import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    topBody: {
        flex: 1,
        backgroundColor: "#376a4f",
        borderBottomLeftRadius: 44,
        borderBottomRightRadius: 44,
        elevation: 12,
        shadowColor: "green",
    },
    infoBody: {
        flex: 0.5,
        backgroundColor: "white"
    },
    plantName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        paddingTop: 30,
        paddingLeft: 30,
    },
    stock: {
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
        paddingTop: 20,
        paddingLeft: 30,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        paddingTop: 60,
        paddingLeft: 30,
    },
    button: {
        borderWidth: 0.4,
        borderRadius: 16,
        elevation: 12,
        shadowColor: "white",
        backgroundColor: "white",
        marginTop: 60,
        marginLeft: 30,
        padding: 10,
        width: Dimensions.get("screen").width / 3,
    },
    buttonText:{
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center"
    },
    image: {
        position: "absolute",
        right: 0,
        bottom: 0,
        height: "100%",
        width: "60%",
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        paddingTop: 20,
        paddingLeft: 30,
    },
    info: {
        fontSize: 13,
        color: "black",
        paddingTop: 10,
        paddingHorizontal: 30,
    },
    bottomBody: {
        flex: 0.5,
        flexDirection: "row"
    },
    bottomLeftBody: {
        flex: 1,
        backgroundColor: "white",
    },
    bottomRightBody: {
        flex: 1,
        backgroundColor: "#4b7860",
        borderTopLeftRadius: 44,
        borderBottomRightRadius: 44,
        marginBottom: 10,
        marginRight: 10,
    },
    specificationTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 30,
    },
    specifications: {
        fontSize: 12,
        color: "black",
        paddingTop: 5,
        paddingLeft: 30,
    },
    iconBox: {
        flexDirection: "row", 
        paddingTop: 10,
        paddingLeft: 30,
    },
    iconInfo: {
        paddingLeft: 10,
        fontSize: 12,
        color: "white",
        alignSelf: "center",
    },
    iconBorder: {
        borderWidth: 1,
        borderColor: "white",
        padding: 4,
    }
});