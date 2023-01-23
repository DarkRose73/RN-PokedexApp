import {View, Text} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {color, simplePokemon} = route.params;
  return (
    <View>
      <Text>
        {simplePokemon.name} - {color}
      </Text>
    </View>
  );
};
