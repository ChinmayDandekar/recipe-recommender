import React from 'react'

const RecipeCard = ({ Title, Image, Desc, Id }) => {
    return (
        <div className="recipe-cards-container">
            <div className="recipe-card">
            <div className="recipe-image">
                <div className="image-frame"></div>
                <img src={Image} alt="no" />    
            </div>
            <div className="recipe-info">
                <h3>{Title}</h3>
                <button className= "like-button"><i className="bi bi-heart-fill"></i></button>
            
            </div>
            </div>
        </div>
        
    )
}

export default RecipeCard
