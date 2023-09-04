import React,{useEffect,useState} from 'react';
import { debounce } from 'lodash'
import './App.css';
import Pokedex from '../Pokedex/Pokedex';
import { pokemonData } from '../../Data/pokeData';
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from '../../types/PokemonSchema';
interface AppState {
  searchField: string;
  allPokemons: PokemonSchema[];
  searchedPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
}

const App: React.FC = ()=> {
  const [searchField, setSearchField] = useState("");
  const [allPokemons, setAllPokemons] = useState<PokemonSchema[]>([]);
  const [searchedPokemons, setSearchedPokemons] = useState<PokemonSchema[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonSchema | undefined>(undefined);

  const patchPokemonData = (pokemons: UnpatchedPokemonSchema[]): PokemonSchema[] => {
      const patchedPokemons =  pokemons.map((pokemon)=>{
        let parsedSprites: PokemonSpritesSchema={
          normal:undefined,
          animated:undefined,
        };
        try {
          parsedSprites=pokemon.sprites &&  JSON.parse(pokemon.sprites);

        } catch (error) {
          console.log("Parsing ",error);
        }
        
        const patchedPokemon : PokemonSchema={
            ...pokemon,
            sprites: parsedSprites
        }

        return patchedPokemon;
      });

      return patchedPokemons;
  }
  // const debouncedSearch = debounce(async (criteria: string) => {
  //   setSearchField(criteria);
  // }, 3000); 
  const handleInputChange = (inputValue: string) => {
    setSearchField(inputValue);
    // debouncedSearch(inputValue);

    const filteredPokemons = allPokemons.filter(
        (pokemon: PokemonSchema) => {
            return (
                pokemon.name &&
                pokemon.name
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
            );
        }
    );

    setSearchedPokemons(filteredPokemons);
};
  useEffect(() => {
    // patch the stringified pokemons
    const patchedPokemons: PokemonSchema[] = patchPokemonData(pokemonData);

    // Update the state with patched pokemons
    setAllPokemons(patchedPokemons);
    setSearchedPokemons(patchedPokemons);
  }, [])
  const handleClick = (pokemonName: string) => {
    const selectedPokemon = allPokemons.find(
        (pokemon: PokemonSchema) => pokemon.name === pokemonName
    );

    setSelectedPokemon(selectedPokemon);
};
  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <Pokedex pokemons={searchedPokemons}
                onInputChange={handleInputChange}
                onPokemonClick={handleClick}
                selectedPokemon={selectedPokemon}
        />
    </div>
  );
}

export default App;
