import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./CategoriesStyles";

function Categories({ categorieName, selected, onPress }) {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: selected ? "#376a4f" : "transparent" }]}
            onPress={onPress}
        >
            <Text style={[styles.categorieName, {color: selected ? "white" : "gray" }]}> {categorieName} </Text>
        </TouchableOpacity>
    );
}

export default Categories;