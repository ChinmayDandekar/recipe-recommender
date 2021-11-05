import React from 'react'
import HeaderButtons from './HeaderButtons'
import HeaderTab from './HeaderTab'

const Header = () => {
    return (
        <div className="header">
            <h1>Recipe Recommendation System</h1>
            <HeaderTab />
            <HeaderButtons />
            
        </div>
    )
}

export default Header
