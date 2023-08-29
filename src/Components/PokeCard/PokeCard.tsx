import React from 'react'
import './PokeCard.css';
interface PokecardProps {
  spriteUrl?: string;
  name: string;
  onPokemonClick: (pokemonName: string) => void;
}
const PokeCard = ({ name, spriteUrl, onPokemonClick}: PokecardProps) => {
  return (
    <div onClick={() => onPokemonClick(name)} className="pokecard">
      <img className="pokemon-sprite" alt="pokemon" src={spriteUrl} />
      <p className='name'>{name}</p>
    </div>
  )
}

export default PokeCard