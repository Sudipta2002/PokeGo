import React from 'react';
import './Pokedex.css';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';

const Pokedex=()=>{
  return (
    <div className='pokedex-container'>
       <div className="pokelist-container">
            <p>List of Pokemons</p>
       </div>
        <div className="pokesearch-container">
            <p>Searching Pokemons</p>
            <PokeSearchResult/>
        </div>
    </div>
  );
}

export default Pokedex;
