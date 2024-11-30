import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import { HomeScreen } from "../screens/home/HomeScreen";
import { SettingsScreen } from "../screens/settings/SettingsScreen";
import { TabScreen1 } from "../screens/tabs/TabScreen1";
import { TabScreen3 } from "../screens/tabs/TabScreen3";
import { TabScreen2 } from "../screens/tabs/TabScreen2,";
import HamburgerMenu from "../components/shared/HamburgerMenu";
import TopTabNavigator from "./TopTabNavigator";
import { StackNavigator } from "./StackNavigator";
import { Ionicons } from "@expo/vector-icons";
import { globalColors } from "../theme/theme";

const Tab = createBottomTabNavigator();
export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      //   sceneContainerStyle={{
      //     backgroundColor: "black",
      //   }}
      screenOptions={{
        tabBarActiveTintColor:globalColors.primary,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: "transparent",
          shadowColor: "transparent",
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        headerLeft: () => <HamburgerMenu />,
      }}
    >
      <Tab.Screen
        options={{
          title: "Tab1",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={18} />
          ),
        }}
        name="Tab1"
        component={TabScreen1}
      />
      <Tab.Screen
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={18} />
          ),
        }}
        name="Tab2"
        component={TopTabNavigator}
      />
      <Tab.Screen
        options={{
          title: "Actions",
          tabBarIcon: ({ color }) => (
            <Ionicons name="arrow-up-circle-outline" color={color} size={18} />
          ),
        }}
        name="Tab3"
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
