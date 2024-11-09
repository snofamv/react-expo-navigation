import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {ButtonComponent} from '../../components/shared/ButtonComponent';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';
import React from 'react';
export const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalStyles.container}>
      <ButtonComponent
        label="Go to Products"
        onPress={() => navigation.navigate('Products')}
      />
      <ButtonComponent
        label="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
