import React from 'react'
import HeaderButtons from './HeaderButtons'
import HeaderTab from './HeaderTab'
import SearchBar from './SearchBar'
import SearchBy from './SearchBy'

const Header = () => {
    return (
        <div className="header">
            <h1>Recipe Recommendation System</h1>
            <HeaderTab />
            <HeaderButtons />
            <SearchBar />
            <SearchBy />
            
        </div>
    )
}

export default Header
