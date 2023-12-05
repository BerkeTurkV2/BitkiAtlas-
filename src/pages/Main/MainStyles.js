import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    inputBox: {
        borderWidth: 0.6,
        borderRadius: 16,
        marginTop: 10,
        marginHorizontal: 20,
        flex:3,
    },
    searchIconBox: {
        borderWidth: 1,
        borderRadius: 16,
        marginTop: 10,
        marginRight: 20,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    searchIcon:{
        padding: 15,
    },
    textInput: {
        paddingLeft: 15,
    }
});