import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {SimplePokemon} from '../interfaces/pokemonInterface';
import {FadeInImage} from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7}>
        <View
          style={{
            ...styles.cardContainer,
            width: windowWidth * 0.4,
          }}>
          {/* Pokemon name & ID */}
          <View>
            <Text style={{...styles.name}}>
              {pokemon.name}
              {'\n#' + pokemon.id}
            </Text>
          </View>

          {/* Pokeball image */}
          <View style={styles.pokeballContainer}>
            <Image
              source={require('../assets/pokebola-blanca.png')}
              style={styles.pokeball}
            />
          </View>

          {/* Pokemon Image */}
          <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'red',
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokeballContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },
  pokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -20,
    bottom: -20,
    opacity: 0.6,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
});

// <FadeInImage uri={item.picture} style={{width: 100, height: 100}} />
