import React from 'react'
import RecipeCard from './RecipeCard'
// import axios from 'axios'

// const Key = "d30c83bf5f2e45638c5a2c4a1e756344";
// const Key = "1d2d61c30a2447b9adf9eec22603bf2b";


const RecipeCards = ({ Data , OnClick}) => {
   
    
    
    return (
        <div className="recipe-cards">

            {Data.map((recipe) => <RecipeCard Title={recipe.title} Image={recipe.image} Id={recipe.id} OnClick={OnClick }/>)}

        </div>
    )
}

export default RecipeCards
