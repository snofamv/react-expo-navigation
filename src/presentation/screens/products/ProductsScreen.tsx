import {View, Text, FlatList} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../theme/theme';
import React from 'react';
import {ButtonComponent} from '../../components/shared/ButtonComponent';
import {RootStackParams} from '../../routes/StackNavigator';

const DATA = [
  {
    id: 1,
    name: 'Producto 1',
  },
  {
    id: 2,
    name: 'Producto 2',
  },
  {
    id: 3,
    name: 'Producto 3',
  },
  {
    id: 4,
    name: 'Producto 4',
  },
  {
    id: 5,
    name: 'Producto 5',
  },
  {
    id: 6,
    name: 'Producto 6',
  },
];
export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Products</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <ButtonComponent
            label={item.name}
            onPress={() => navigation.navigate('Product', item)}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />

      <Text style={{marginBottom: 10, fontSize: 30}}>Ajustes</Text>
      <ButtonComponent
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
