import React from 'react';
import './Pokedex.css';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import SearchBox from '../SearchBox/SearchBox';
import PokeList from '../Pokelist/PokeList';
import { PokemonSchema } from '../../types/PokemonSchema';
 
interface PokedexProps{
    pokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    onInputChange: (inputValue: string) => void;
    onPokemonClick: (pokemonName: string) => void;
}

const Pokedex=({pokemons, selectedPokemon,onInputChange,onPokemonClick}:PokedexProps)=>{
    // console.log(pokemons);
  return (
    <div className='pokedex-container'>
       <div className="pokelist-container">
            {/* <p>List of Pokemons</p> */}
            <SearchBox onInputChange={onInputChange}/>
            <PokeList pokeList={pokemons} onPokemonClick={onPokemonClick}/>
       </div>
        <div className="pokesearch-container">
            {/* <p>Searching Pokemons</p> */}
            <PokeSearchResult selectedPokemon={selectedPokemon}/>
        </div>
    </div>
  );
}

export default Pokedex;
