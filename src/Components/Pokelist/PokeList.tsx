import React from 'react'
import './PokeList.css';
import PokeCard from '../PokeCard/PokeCard';
import { PokemonSchema } from '../../types/PokemonSchema';

interface PokeListProps{
  pokeList: PokemonSchema[];
}

const PokeList = ({pokeList}:PokeListProps) => {
  return (
    <div className="pokelist">
        {pokeList.map((pokemon) => {
                return (
                    pokemon.name && (
                        <PokeCard
                            key={pokemon.id}
                            name={pokemon.name}
                            spriteUrl={pokemon.sprites.normal}
                            // onPokemonClick={onPokemonClick}
                        />
                    )
                );
            })}
        
    </div>
  )
}

export default PokeList