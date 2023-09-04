import React from 'react'
import './SearchBox.css'
import { debounce } from 'lodash';
interface SearchboxProps {
  onInputChange: (inputValue: string) => void;
}
const SearchBox = ({ onInputChange }: SearchboxProps) => {
  const debouncedSearch = debounce(async (criteria: string) => {
    onInputChange(criteria);
  }, 2000); 
  return (
    <input className='search' type='search ' onChange={(e) => {
      debouncedSearch(e.target.value);
      // onInputChange(e.target.value);
  }} placeholder='Search Pokemons'/>
  )
}

export default SearchBox