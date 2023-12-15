import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import Iconx from "react-native-vector-icons/Entypo";

import styles from "./DetailsStyles";

function Details({ route }) {

    const { item } = route.params;

    return (
        <View style={styles.container} >
            <View style={styles.topBody} >
                <Image style={styles.image} source={require("../../assets/plants/p1.png")} resizeMode="stretch" />
                <Text style={styles.plantName} >Kentia</Text>
                <Text style={styles.price} >Fiyat - 180 TL</Text>
                <Text style={styles.stock} >Stokta Var</Text>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} >Sepete Ekle</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.infoBody}>
                <Text style={styles.infoTitle} >Bitki Bilgileri</Text>
                <Text style={styles.info} >Bahçenizde renkli çiçekler, gölgeli ağaçlar ve canlı bitkilerle dolu bir dünya hayal edin. Rüzgarın hafif esintisiyle birlikte, farklı türdeki bitkilerin zarif yaprakları melodik bir dans sergiler.</Text>
            </View>
            <View style={styles.bottomBody}>
                <View style={styles.bottomLeftBody}>
                    <Text style={styles.specificationTitle}>Özellikleri</Text>
                    <Text style={styles.specifications}>Ev Bitkisi</Text>
                    <Text style={styles.specifications}>Yaprak Rengi : Yeşil</Text>
                    <Text style={styles.specifications}>Bakım: Kolay</Text>
                    <Text style={styles.specifications}>Uzunluk: 150cm - 180cm</Text>
                </View>
                <View style={styles.bottomRightBody} >
                    <View style={{ marginTop: 10, }} >
                        <View style={styles.iconBox} >
                            <View style={styles.iconBorder}>
                                <Icon style={styles.icon} name={"sun"} color={"white"} size={18} />
                            </View>
                            <Text style={styles.iconInfo}>Güneş Sever</Text>
                        </View>
                        <View style={styles.iconBox} >
                            <View style={styles.iconBorder}>
                                <Iconx style={styles.icon} name={"water"} color={"white"} size={18} />
                            </View>
                            <Text style={styles.iconInfo}>2x Günde</Text>
                        </View>
                        <View style={styles.iconBox} >
                            <View style={styles.iconBorder}>
                                <Icon style={styles.icon} name={"temperature-high"} color={"white"} size={18} />
                            </View>
                            <Text style={styles.iconInfo}>Oda Sıcaklığı</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Details;