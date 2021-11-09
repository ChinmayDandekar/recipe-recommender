import React from 'react'

const AutoCompleteRecipe = ({ Title,Id }) => {
    return (
        <li key={Id} className="auto-recipe">
            <h2>{ Title }</h2>
        </li>
    )
}

export default AutoCompleteRecipe
