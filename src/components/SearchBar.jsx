import React from 'react'
import searchIcon from '../assets/searchIcon.svg'
import AutoCompleteRecipe from './AutoCompleteRecipe';


const SearchBar = ({ onClick , onSearchTextChange, input, onKeyDown, autoRecipe }) => {
    
    

   
    return (
        <div className="search-bar">
            <img src= { searchIcon } alt="" />
            <input value={input} onClick={onClick} onKeyDown={ onKeyDown } onChange={onSearchTextChange} className="searchInput" id="searchInput" type="text" />
            <div className="auto-recipes">
                {autoRecipe.length>0 && autoRecipe.map((recipe)=> <AutoCompleteRecipe Title={recipe.title} Id ={recipe.id} />)}
            </div>
        </div>
    )
}

    export default SearchBar
