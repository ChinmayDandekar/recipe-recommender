import React from 'react'
import RecipeCard from './RecipeCard'
import axios from 'axios'

// const Key = "d30c83bf5f2e45638c5a2c4a1e756344";
const Key = "1d2d61c30a2447b9adf9eec22603bf2b";


const RecipeCards = ( ) => {
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
    // const [featuredRecipes, setFeaturedRecipes] = React.useState([]);

    // React.useEffect(() => {
    //     fetchData();
    //     async function fetchData() {
        
    //         try {
    //         const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=8&apiKey=${Key}`)
                
    //         let data = result.data.results;
    //         //     console.log(data)
    //         //     data.map((recipe) => {
    //         //         // <li key={ recipe.id }><RecipeCard Title={recipe.title} Image={recipe.image}  Id={ recipe.id }/></li>
    //         //     });
                
    //             setFeaturedRecipes(data);
    
    //         } catch (error) {
    //             console.error(error);
                
    //         }
        
    //     }
    // }, [setFeaturedRecipes]);
    
    console.log(featuredRecipes);
    
    
    return (
        <div className="recipe-cards">
            {/* {fetchData()} */}
            {featuredRecipes.map((recipe) => <RecipeCard Title={recipe.title} Image={recipe.image} Id={ recipe.id }/>)}

        </div>
    )
}

export default RecipeCards
