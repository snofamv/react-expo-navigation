// Archivo actual: HamburgerMenu
import { View, Text, Pressable, StyleSheet } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { globalColors, globalStyles } from "../../theme/theme";

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      style={{ marginLeft: 5 }}
    >
      <Ionicons name="menu-outline" size={24} color={globalColors.primary}/>
    </Pressable>
  );
};
export default HamburgerMenu;
