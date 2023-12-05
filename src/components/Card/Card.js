import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./CardStyles";

function Card() {
    return (
        <View style={styles.container} >
            <View style={styles.box}>
                <Image style={styles.image}  source={require("../../assets/plants/p1.png")} resizeMode="contain" />
            </View>
            <Text>Kentia</Text>
        </View>
    )
}

export default Card;