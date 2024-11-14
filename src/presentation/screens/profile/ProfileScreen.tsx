import { View, Text } from "react-native";
import { globalStyles } from "../../theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ButtonComponent } from "../../components/shared/ButtonComponent";
import { DrawerActions, useNavigation } from "@react-navigation/native";
export const ProfileScreen = () => {
  const { top } = useSafeAreaInsets(); // sirve para ver la medida exacta para mostrar contenido en un area segura tanto en IOS como Android
  const navigation = useNavigation();

  // console.log({ top });
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, marginTop: top }}>
      <Text>ProfileScreen</Text>

      <ButtonComponent
        label="Abrir menu"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      {/* <ButtonComponent
        label="Abrir2 menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      /> */}
    </View>
  );
};
