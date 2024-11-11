import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackNavigator } from "./src/presentation/routes/StackNavigator";
import { SideMenuNavigator } from "./src/presentation/routes/SideMenuNavigator";

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        <SideMenuNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
