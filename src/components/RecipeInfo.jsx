import React from 'react'

const RecipeInfo = ({ Id, Close,Data }) => {
    const timeToMake = Data.readyInMinutes;

    const recipeInstructions = Data.analyzedInstructions[0].steps;
    const recipeIngredients = Data.extendedIngredients;
    
   
    const summary = Data.summary;
    const ingredients = Data.extendedIngredients;
    console.log(ingredients)
    const image = Data.image;
    return (
        <div className="recipe-info-page">
            <button onClick={Close } className="info-page-close">X</button>
                <h1 className="recipe-title">{Data.title}</h1>
            
            <div className="image-container">
                <div className="recipe-short-info">
                    <div clasName="summary-cont">
                        <h3>Summary:</h3>
                        <p className="recipe-summary" dangerouslySetInnerHTML={{__html: summary}}></p></div>
                    </div>
                <img src={image} alt="" />
            </div>
            
            <h3 className="recipe-time">Time to Make: {timeToMake} mins</h3>
            <div className="recipe-main-cont">
                
                <div className="recipe-step-cont">
                    <h4 className="recipe-heading">Recipe:</h4>
                    <ul className="recipe-steps">
                        {recipeInstructions.map((step) => {
                            return <li>{step.step}</li>
                        })}
                    </ul>
                </div>
                <div className="ingredient-cont">
                    <h3 className="ingredient-heading">Ingredients</h3>
                    <ul className="ingredient-list">
                        {recipeIngredients.map((ingredient) => <li>{ ingredient.originalString }</li>)}
                    </ul>
                </div>
            </div>
            
           
        </div>
    )
}

export default RecipeInfo
