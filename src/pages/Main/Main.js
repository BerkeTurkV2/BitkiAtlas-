import React from "react";
import { View, Text, TextInput, ScrollView, FlatList, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Categories from "../../components/Categories/Categories";
import Card from "../../components/Card/Card";

import plantData from "../../json/data.json";

import styles from "./MainStyles";

function Main({navigation}) {

    function goToDetails(item) {
        navigation.navigate("Details", {item});
    }

    const renderItem = ({ item }) => (
        <Card plantName={item.plantName} plantImage={item.image} price={item.price} onPress={() => goToDetails(item)}  />
    );

    return (
        <View style={styles.container} >
            <StatusBar backgroundColor={"#376a4f"} />
            <View style={{ flexDirection: "row" }} >
                <View style={styles.inputBox} >
                    <TextInput style={styles.textInput} placeholder="Arama" />
                </View>
                <View style={styles.searchIconBox} >
                    <Icon name="search" color={"white"} size={18} style={styles.searchIcon} />
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
            <FlatList
                data={plantData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3}
            />
        </View>
    )
}

export default Main;