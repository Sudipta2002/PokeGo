import React from 'react';
import './Pokedex.css';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import SearchBox from '../SearchBox/SearchBox';

const Pokedex=()=>{
  return (
    <div className='pokedex-container'>
       <div className="pokelist-container">
            {/* <p>List of Pokemons</p> */}
            <SearchBox/>
       </div>
        <div className="pokesearch-container">
            {/* <p>Searching Pokemons</p> */}
            <PokeSearchResult/>
        </div>
    </div>
  );
}

export default Pokedex;
