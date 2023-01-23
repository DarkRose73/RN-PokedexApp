import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <View>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokeballBG}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({item, index}) => {
          return (
            <Image
              source={{uri: item.picture}}
              style={{width: 100, height: 100}}
            />
          );
        }}
        // Infinite Scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        // Loading
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="grey" />
        }
      />
      {/* <Text style={{...styles.title, ...styles.globalMargin, top: top + 20}}>
        Pokedex
      </Text> */}
    </View>
  );
};
