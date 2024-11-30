import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HomeScreen } from "../screens/home/HomeScreen";
import AboutScreen from "../screens/about/AboutScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";

export const TopTabNavigator = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
export default TopTabNavigator;
