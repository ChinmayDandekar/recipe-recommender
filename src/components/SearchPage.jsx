import React from 'react'
import RecipeResult from './RecipeResult'


const SearchPage = ({onClick}) => {

    
    const featuredRecipes = [
        {id: 716426, title: 'Cauliflower, Brown Rice, and Vegetable Fried Rice', image: 'https://spoonacular.com/recipeImages/716426-312x231.jpg', imageType: 'jpg' },
        {id: 715594, title: 'Homemade Garlic and Basil French Fries', image: 'https://spoonacular.com/recipeImages/715594-312x231.jpg', imageType: 'jpg' },
        {id: 715497, title: 'Berry Banana Breakfast Smoothie', image: 'https://spoonacular.com/recipeImages/715497-312x231.jpg', imageType: 'jpg'},
        {id: 644387, title: 'Garlicky Kale', image: 'https://spoonacular.com/recipeImages/644387-312x231.jpg', imageType: 'jpg' },
        {id: 715392, title: 'Chicken Tortilla Soup (Slow Cooker)', image: 'https://spoonacular.com/recipeImages/715392-312x231.jpg', imageType: 'jpg' },
        {id: 716268, title: 'African Chicken Peanut Stew', image: 'https://spoonacular.com/recipeImages/716268-312x231.jpg', imageType: 'jpg'},
        {id: 716381, title: 'Nigerian Snail Stew', image: 'https://spoonacular.com/recipeImages/716381-312x231.jpg', imageType: 'jpg'},
        {id: 782601, title: 'Red Kidney Bean Jambalaya', image: 'https://spoonacular.com/recipeImages/782601-312x231.jpg', imageType: 'jpg'},
    ]

    return (
        <div className="search-page-container">
            <h1>Search By Name</h1>
            <button className="search-page-close" onClick={onClick}>X</button>
            <h2>Results</h2>
            <div className="recipe-results">
                {featuredRecipes.map((recipe) => {
                    return <RecipeResult Id={recipe.id} Title={recipe.title} Desc="hello" Image={recipe.image} />
                })}
            </div>

        </div>
    )
}

export default SearchPage
