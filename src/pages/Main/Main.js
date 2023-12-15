import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, FlatList, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Categories from "../../components/Categories/Categories";
import Card from "../../components/Card/Card";

import plantData from "../../json/data.json";

import styles from "./MainStyles";

function Main({ navigation }) {

    const [selectedCategory, setSelectedCategory] = useState("Hepsi");
    const [filteredPlants, setFilteredPlants] = useState(plantData);
    const [searchPlant, setSearchPlant] = useState("");

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);

        if (category === "Hepsi") {
            setFilteredPlants(plantData);
        } else {
            const filteredData = plantData.filter((item) => item.type === category);
            setFilteredPlants(filteredData);
        }
    };

    const handleSearch = (text) => {
        setSearchPlant(text);

        const filteredData = plantData.filter((item) =>
            item.plantName.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredPlants(filteredData);
    };

    const renderItem = ({ item }) => (
        <Card plantName={item.plantName} plantImage={item.image} onPress={() => goToDetails(item)} />
    );

    function goToDetails(item) {
        navigation.navigate("Details", { item });
    };

    return (
        <View style={styles.container} >
            <StatusBar backgroundColor={"#376a4f"} />
            <View style={{ flexDirection: "row" }} >
                <View style={styles.inputBox} >
                    <TextInput style={styles.textInput} placeholder="Arama" onChangeText={handleSearch} value={searchPlant} />
                </View>
                <View style={styles.searchIconBox} >
                    <Icon name="search" color={"white"} size={18} style={styles.searchIcon} />
                </View>
            </View>
            <View>
                <ScrollView horizontal={true} >
                    <View style={{ flexDirection: "row" }} >
                        <Categories
                            categorieName={"Hepsi"}
                            selected={selectedCategory === "Hepsi"}
                            onPress={() => handleCategoryPress("Hepsi")}
                        />
                        <Categories
                            categorieName={"Ev Bitkileri"}
                            selected={selectedCategory === "Ev Bitkileri"}
                            onPress={() => handleCategoryPress("Ev Bitkileri")}
                        />
                        <Categories
                            categorieName={"Bahçe Bitkileri"}
                            selected={selectedCategory === "Bahçe Bitkileri"}
                            onPress={() => handleCategoryPress("Bahçe Bitkileri")}
                        />
                        <Categories
                            categorieName={"Yapay Bitkiler"}
                            selected={selectedCategory === "Yapay Bitkiler"}
                            onPress={() => handleCategoryPress("Yapay Bitkiler")}
                        />
                    </View>
                </ScrollView>
            </View >
            <View style={styles.separator} />
            <FlatList
                data={filteredPlants}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3}
            />
        </View >
    )
}

export default Main;