import React from 'react'
import './PokeSearchResult.css'
const PokeSearchResult = () => {
    const selectedPokemon = false;
  return (
    <div>
        <div className="poke-result-card">
            {
                selectedPokemon?(
                    <div>
                        <p>Name</p>
                    </div>
                    ):(
                    <div>
                        <h2>Welcome to Pokedex</h2>
                    </div>)
            }
        </div>
    </div>
  )
}

export default PokeSearchResult