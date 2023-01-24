import {
  View,
  Platform,
  ActivityIndicator,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles as globalStyles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  if (isFetching) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size={50} color="grey" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
        marginHorizontal: 20,
      }}>
      <SearchInput />
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
              ...globalStyles.title,
              ...globalStyles.globalMargin,
              paddingBottom: 10,
            }}>
            Pokedex
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
