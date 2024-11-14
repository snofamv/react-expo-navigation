import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import { HomeScreen } from "../screens/home/HomeScreen";
import { SettingsScreen } from "../screens/settings/SettingsScreen";
import { TabScreen1 } from "../screens/tabs/TabScreen1";
import { TabScreen3 } from "../screens/tabs/TabScreen3";
import { TabScreen2 } from "../screens/tabs/TabScreen2,";

const Tab = createBottomTabNavigator();
export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      //   sceneContainerStyle={{
      //     backgroundColor: "black",
      //   }}
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: "transparent",
          shadowColor: "transparent",
        },
        tabBarItemStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen name="Tab1" component={TabScreen1} />
      <Tab.Screen name="Tab2" component={TabScreen2} />
      <Tab.Screen name="Tab3" component={TabScreen3} />
    </Tab.Navigator>
  );
};
