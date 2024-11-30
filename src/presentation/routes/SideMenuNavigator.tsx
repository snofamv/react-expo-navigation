import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { HomeScreen } from "../screens/home/HomeScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { StackNavigator } from "./StackNavigator";
import { globalColors } from "../theme/theme";
import { useWindowDimensions, View, Text } from "react-native";
import { BottomTabNavigator } from "./BottomTabNavigator";
import TopTabNavigator from "./TopTabNavigator";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const EmptyView = () => (
  <View>
    <Text>Logout</Text>
  </View>
);
export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.height >= 760 ? "slide" : "permanent", //Cambia el estilo de transicion del drawer
        drawerStyle: dimensions.height >= 760 ? {} : { maxWidth: 230 },
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      {/* <Drawer.Screen name="TopTabs" component={TopTabNavigator} /> */}
      <Drawer.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="apps-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen name="Logout" component={EmptyView} /> */}
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          alignSelf: "center",
          height: 130,
          width: 130,
          margin: 30,
          backgroundColor: globalColors.primary,
          borderRadius: 100,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
