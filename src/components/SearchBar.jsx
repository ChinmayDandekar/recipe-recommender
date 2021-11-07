import React from 'react'
import searchIcon from '../assets/searchIcon.svg'

const SearchBar = () => {
    return (
        <div className="search-bar">
            {/* <i id="searchIcon" class="bi bi-search"></i> */}
            <img src= { searchIcon } alt="" />
            <input className="searchInput" type="text" />
        </div>
    )
}

export default SearchBar
