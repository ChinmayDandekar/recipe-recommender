import React from 'react'



const SearchBy = ( {OnChange} ) => {
    return (
        <div className="search-by">
            <h4>Search By:</h4>
            <form name="search-container" id="search-container">
                <select id="search-menu" name="search-menu" defaultValue="Name" onChange={OnChange}>
                    <option value="Ingredients">Ingredients</option>
                    <option value="Name" >Name</option>
                </select>
            </form>
           
        </div>
    )
}

export default SearchBy
