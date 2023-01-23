import {useState, useEffect} from 'react';
import {FullPokemon} from '../interfaces/pokemonInterface';
import {pokemonApi} from '../api/pokemonApi';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<FullPokemon>({} as FullPokemon);

  const loadPokemon = async () => {
    const resp = await pokemonApi.get<FullPokemon>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokemon(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
