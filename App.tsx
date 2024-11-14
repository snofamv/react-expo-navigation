import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackNavigator } from "./src/presentation/routes/StackNavigator";
import { SideMenuNavigator } from "./src/presentation/routes/SideMenuNavigator";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { BottomTabNavigator } from "./src/presentation/routes/BottomTabNavigator";

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        <SideMenuNavigator />
        {/* <BottomTabNavigator /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
