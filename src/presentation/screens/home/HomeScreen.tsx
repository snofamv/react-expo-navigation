import { View } from "react-native";
import { globalStyles } from "../../theme/theme";
import { ButtonComponent } from "../../components/shared/ButtonComponent";
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { RootStackParams } from "../../routes/StackNavigator";
import React from "react";
import { useEffect } from "react";
export const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ButtonComponent
          styleLabel={{ color: "black" }}
          styleButton={[globalStyles.hamburgerButton]}
          label="Menu"
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        />
      ),
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <ButtonComponent
        label="Go to Products"
        onPress={() => navigation.navigate("Products")}
      />
      <ButtonComponent
        label="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};
