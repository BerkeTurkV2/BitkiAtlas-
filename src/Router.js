import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import Icon from "react-native-vector-icons/Entypo";

import Main from "./pages/Main/Main";
import Details from "./pages/PlantDetail/Details";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const DefaultTheme = {
    "colors": {
        "secondaryContainer": "white",
    }
}

const PlantStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#376a4f" },
            headerTitleAlign: "center",
            headerTintColor: "white",
        }} >
            <Stack.Screen name="Main" component={Main} initialParams={Main} options={{ title: "Bitki Atlası" }} />
            <Stack.Screen name="Details" component={Details} options={{ title: "" }} />
        </Stack.Navigator>
    )
}

function Router() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    theme={DefaultTheme}
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'green',
                        },
                    }}
                    shifting={true}
                    activeColor="white"
                    inactiveColor="black"
                    barStyle={styles.tabBar}>
                    <Tab.Screen name="PlantStack" component={PlantStack} options={{
                        title: "Bitkiler",
                        tabBarIcon: () => (
                            <Icon name="flower" color={"black"} size={24} />
                        ),

                    }} />
                    <Tab.Screen name="Cart" component={Cart} options={{
                        title: "Sepet",
                        tabBarIcon: () => (
                            <Icon name="shopping-cart" color={"black"} size={24} />
                        ),
                    }} />
                    <Tab.Screen name="Profile" component={Profile} options={{
                        title: "Profil",
                        tabBarIcon: () => (
                            <Icon name="user" color={"black"} size={24} />
                        ),
                    }} />
                </Tab.Navigator>
            </NavigationContainer >
        </SafeAreaProvider>
    )
};

const styles = StyleSheet.create({
    tabBar: {
        height: 70,
        backgroundColor: '#376a4f',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: 'hidden',
    },
})

export default Router;