import React from 'react'
import HeaderButtons from './HeaderButtons'
import HeaderTab from './HeaderTab'
// import SearchBar from './SearchBar'
// import SearchBy from './SearchBy'

const Header = () => {
    // const isSearchActive = false;
    return (
        <div className="header">
            <h1>Recipe Recommendation System</h1>
            <HeaderTab />
            <HeaderButtons />
            
        </div>
    )
}

export default Header
