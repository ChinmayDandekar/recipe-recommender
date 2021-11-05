import React from 'react'
import HeaderButton from './HeaderButton'

const HeaderButtons = () => {
    return (
        <ul className="header-buttons">
            <HeaderButton Name="Create" />
            <HeaderButton Name= "Login" />
            <HeaderButton Name= "SignUp" />
        </ul>
    )
}

export default HeaderButtons
