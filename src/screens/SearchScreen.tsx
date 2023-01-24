import {View, Platform, Text, FlatList, Dimensions} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';
import {useState, useEffect} from 'react';
import {SimplePokemon} from '../interfaces/pokemonInterface';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  const [filteredPokemons, setFilteredPokemons] = useState<SimplePokemon[]>([]);

  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setFilteredPokemons([]);
    }
    if (isNaN(Number(term))) {
      setFilteredPokemons(
        simplePokemonList.filter(poke =>
          poke.name.toLowerCase().includes(term.toLowerCase()),
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find(poke => poke.id === term);
      setFilteredPokemons(pokemonById ? [pokemonById] : []);
    }
  }, [term]);

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
        onDebounce={value => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 20,
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredPokemons}
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
            {term}
          </Text>
        }
      />
    </View>
  );
};
