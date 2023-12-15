import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import Iconx from "react-native-vector-icons/Entypo";

import styles from "./DetailsStyles";

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

function Details({ route }) {

    const { item } = route.params;

    return (
        <View style={styles.container} >
            <View style={styles.topBody} >
                <Image style={styles.image} source={plantImages[item.image]} resizeMode="stretch" />
                <Text style={styles.plantName} >{item.plantName}</Text>
                <Text style={styles.price} >Fiyat - {item.price} </Text>
                <Text style={styles.stock} >Stokta Var</Text>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} >Sepete Ekle</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.infoBody}>
                <Text style={styles.infoTitle} >Bitki Bilgileri</Text>
                <Text style={styles.info} >{item.description} </Text>
            </View>
            <View style={styles.bottomBody}>
                <View style={styles.bottomLeftBody}>
                    <Text style={styles.specificationTitle}>Özellikleri</Text>
                    <Text style={styles.specifications}>{item.type} </Text>
                    <Text style={styles.specifications}>Yaprak Rengi : {item.color} </Text>
                    <Text style={styles.specifications}>Bakım: {item.care} </Text>
                    <Text style={styles.specifications}>Uzunluk: {item.height} </Text>
                </View>
                <View style={styles.bottomRightBody} >
                    <View style={{ marginTop: 10, }} >
                        <View style={styles.iconBox} >
                            <View style={styles.iconBorder}>
                                <Icon style={styles.icon} name={"sun"} color={"white"} size={18} />
                            </View>
                            <Text style={styles.iconInfo}>{item.sunlight} </Text>
                        </View>
                        <View style={styles.iconBox} >
                            <View style={styles.iconBorder}>
                                <Iconx style={styles.icon} name={"water"} color={"white"} size={18} />
                            </View>
                            <Text style={styles.iconInfo}>{item.water} </Text>
                        </View>
                        <View style={styles.iconBox} >
                            <View style={styles.iconBorder}>
                                <Icon style={styles.icon} name={"temperature-high"} color={"white"} size={18} />
                            </View>
                            <Text style={styles.iconInfo}>{item.temperature} </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Details;