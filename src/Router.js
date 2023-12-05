import React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "./pages/Main/Main";

const Stack = createNativeStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;