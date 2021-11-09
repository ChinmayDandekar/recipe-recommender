import React from 'react'

const RecipeCard = ({ Title, Image, Desc, Id, OnClick }) => {
    return (
        <div key={Id } id={Id } onClick={ OnClick } className="recipe-cards-container">
            <div id={Id } className="recipe-card">
            <div id={Id } className="recipe-image">
                <div id={Id } className="image-frame"></div>
                <img id={Id } src={Image} alt="no" />    
            </div>
            <div id={Id } className="recipe-info">
                <h3 id={Id } >{Title}</h3>
                <button id={Id } className= "like-button"><i className="bi bi-heart-fill"></i></button>
            
            </div>
            </div>
        </div>
        
    )
}

export default RecipeCard
