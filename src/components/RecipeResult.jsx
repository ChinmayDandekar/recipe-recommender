import React from 'react'

const RecipeResult = ({Title, Image}) => {
    return (
        <li className="recipe-result">
            <div className="result-info">
                <h3>{Title}</h3>
    
            </div>
            <img src={Image} alt="no" />
        </li>
    )
}

export default RecipeResult
