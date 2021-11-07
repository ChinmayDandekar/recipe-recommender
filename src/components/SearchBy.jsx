import React from 'react'

const SearchBy = () => {
    return (
        <div className="search-by">
            <h4>Search By:</h4>
            <div id="search-container">
                <select id="search-menu" name="search-menu">
                    <option value="Ingredients">Ingredients</option>
                    <option value="Name">Name</option>
                </select>
            </div>
           
        </div>
    )
}

export default SearchBy
