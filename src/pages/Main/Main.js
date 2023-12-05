import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Categories from "../../components/Categories/Categories";
import Card from "../../components/Card/Card";

import styles from "./MainStyles";

function Main() {
    return (
        <View style={styles.container} >
            <View style={{ flexDirection: "row" }} >
                <View style={styles.inputBox} >
                    <TextInput style={styles.textInput} placeholder="Arama" />
                </View>
                <View style={styles.searchIconBox} >
                    <Icon name="search" color={"black"} size={18} style={styles.searchIcon} />
                </View>
            </View>
            <View>
                <ScrollView horizontal={true} >
                    <View style={{ flexDirection: "row" }} >
                        <Categories categorieName={"Hepsi"} />
                        <Categories categorieName={"Ev Bitkileri"} />
                        <Categories categorieName={"Bahçe Bitkileri"} />
                        <Categories categorieName={"Yapay Bitkiler"} />
                    </View>
                </ScrollView>
            </View>
            <View style={{ flexDirection: "row" }}>
               <Card/>
               <Card/>
               <Card/>
            </View>
            
        </View>
    )
}

export default Main;