import {View, Text} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';
import {useEffect} from 'react';
import React from 'react';
export const ProductScreen = (): React.JSX.Element => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  //   Para agregar a la cabecera el titulo de el parametro, se debe usar el navigation
  // con un useEffect cargar con el componente el nuevo titulo
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text style={{fontSize: 30, margin: 10}}>Producto:</Text>
      <Text style={{fontSize: 20, marginTop: 10, textAlign: 'center'}}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
