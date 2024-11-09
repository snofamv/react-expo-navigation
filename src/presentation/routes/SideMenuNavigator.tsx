import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProfileScreen} from '../profile/ProfileScreen';
import {HomeScreen} from '../screens/home/HomeScreen';

export const SideMenuNavigator = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});
