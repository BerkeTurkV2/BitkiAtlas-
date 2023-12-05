import React from 'react';
import { View, Text } from "react-native";

import styles from "./CategoriesStyles";

function Categories({categorieName}) {
    return (
        <View style={styles.container} >
            <Text style={styles.categorieName}> {categorieName} </Text>
        </View>
    )
}

export default Categories;