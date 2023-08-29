import React from 'react'
import './PokeList.css';
import PokeCard from '../PokeCard/PokeCard';
const PokeList = () => {
  return (
    <div className="pokelist">
        <PokeCard name="Pikachu"/>
        <PokeCard name="bulbasaur"/>
        <PokeCard name="Pikachu"/>
        
    </div>
  )
}

export default PokeList