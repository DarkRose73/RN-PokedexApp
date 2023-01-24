import {View, Platform, Text, FlatList, Dimensions} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}>
      <SearchInput
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 20,
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({item, index}) => {
          return <PokemonCard pokemon={item} />;
        }}
        // Generate x elements per row
        numColumns={2}
        // Header
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              paddingBottom: 10,
              marginTop: top + 60,
            }}>
            Pokedex
          </Text>
        }
      />
    </View>
  );
};
