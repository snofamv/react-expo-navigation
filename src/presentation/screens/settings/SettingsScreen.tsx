import {View, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {ButtonComponent} from '../../components/shared/ButtonComponent';
import {StackActions, useNavigation} from '@react-navigation/native';
import React from 'react';
export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>Settings Screen</Text>
      <ButtonComponent label="Go Back" onPress={() => navigation.goBack()} />
      {/* para poder volver a una vista raiz, se debe usar navigation.dispatch(StackActions.popToTop()) */}
      <ButtonComponent
        label="Go Home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
