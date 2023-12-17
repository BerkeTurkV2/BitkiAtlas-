import React from "react";
import { View, Text, Image } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

import styles from "./AddCartStyles";

const plantImages = {
    p1: require("../../assets/plants/p1.png"),
    p2: require("../../assets/plants/p2.png"),
    p3: require("../../assets/plants/p3.png"),
    p4: require("../../assets/plants/p4.png"),
    p5: require("../../assets/plants/p5.png"),
    p6: require("../../assets/plants/p6.png"),
    p7: require("../../assets/plants/p7.png"),
    p8: require("../../assets/plants/p8.png"),
    p9: require("../../assets/plants/p9.png"),
    p10: require("../../assets/plants/p10.png"),
    p11: require("../../assets/plants/p11.png"),
    p12: require("../../assets/plants/p12.png"),
    p13: require("../../assets/plants/p13.png"),
};

function AddCart({plantImage, plantName, plantPrice}) {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={plantImages[plantImage]} resizeMode="stretch" />
            <View style={styles.leftBox} >
                <Text style={styles.plantName} >{plantName}</Text>
                <View style={styles.leftUnderBox} >
                    <Icon name="minuscircle" size={16} color="#376a4f" />
                    <Text style={styles.number} >1</Text>
                    <Icon name="pluscircle" size={16} color="#376a4f" />
                </View>
            </View>
            <View style={styles.rightBox}>
                <Text style={styles.price}>{plantPrice} TL</Text>
                <Icon name={"delete"} size={22} color="red" />
            </View>
        </View>
    )
}

export default AddCart;