import React from 'react'
import './PokeList.css';
import PokeCard from '../PokeCard/PokeCard';
import { PokemonSchema } from '../../types/PokemonSchema';

interface PokeListProps{
  pokeList: PokemonSchema[];
  onPokemonClick: (pokemonName: string) => void;
}

const PokeList = ({pokeList,onPokemonClick}:PokeListProps) => {
  return (
    <div className="pokelist">
        {pokeList.map((pokemon) => {
                return (
                    pokemon.name && (
                        <PokeCard
                            key={pokemon.id}
                            name={pokemon.name}
                            spriteUrl={pokemon.sprites.normal}
                            onPokemonClick={onPokemonClick}
                        />
                    )
                );
            })}
        
    </div>
  )
}

export default PokeList