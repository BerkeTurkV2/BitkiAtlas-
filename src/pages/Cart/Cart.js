import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CartComp from "../../components/Cart/AddCart";

import styles from "./CartStyles";

function Cart() {
    return (
        <View style={styles.container} >
            <Text style={styles.cartTitle} >Sepetim</Text>
            <View style={styles.cartBox}>
                <ScrollView>
                    <CartComp plantImage={"p1"} plantName={"Clipsalvia"} plantPrice={180} />
                    <CartComp plantImage={"p8"} plantName={"Veiloxia"} plantPrice={199}/>
                    <CartComp plantImage={"p9"} plantName={"Rustleleaf"} plantPrice={219}/>
                </ScrollView>
                <View style={styles.cartUnderBox} >
                   <Text style={styles.totalPrice}>3 Ürün  -  Toplam 598 TL</Text> 
                </View>  
            </View>
            <Text style={styles.addressTitle}>Adres:</Text>
            <Text style={styles.address}>Yeşil Caddesi, Bitki Sokak, Çiçek Mahallesi, Yaprak Apartmanı, İzmir/Türkiye</Text>
            <TouchableOpacity>
                <Text style={styles.newAdress}>+ Yeni Adres Ekle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentBox} >
                <Text style={styles.payment} >Ödeme Yap</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Cart;