import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductsScreen } from "../screens/products/ProductsScreen";
import { SettingsScreen } from "../screens/settings/SettingsScreen";
import { ProductScreen } from "../screens/products/ProductScreen";
import { HomeScreen } from "../screens/home/HomeScreen";
// El rootstackparams es un type o interfaz que define que parametros se envien a cada pantalla
export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Product: { id: number; name: string };
  Settings: undefined;
};
//Se define el stack como si es de tipo<RootStackParams>
// const Stack = createNativeStackNavigator<RootStackParams>();
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerShadowVisible: true,
        headerStyle: {
          backgroundColor: "#b8b8b8",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "My home",
          headerTitleAlign: "center",
          headerTitle: "Home page",
        }}
      />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
