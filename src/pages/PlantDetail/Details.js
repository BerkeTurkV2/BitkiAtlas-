import React from "react";
import { View, Text } from "react-native";

function Details({route}) {

    const {item} = route.params;

    return (
        <View>
            <Text>Details</Text>
            <Text>{item.plantName} </Text>
            <Text>Details</Text>
        </View>
    )
}

export default Details;