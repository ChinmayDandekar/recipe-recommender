import React from 'react'
import Header from './Header'
import FeaturedRecipes from './FeaturedRecipes'
import SearchBar from './SearchBar'
import axios from "axios"
import SearchPage from './SearchPage'
import SearchBy from './SearchBy'
import RecipeInfo from './RecipeInfo'

// const Key = "d30c83bf5f2e45638c5a2c4a1e756344";
// const Key = "1d2d61c30a2447b9adf9eec22603bf2b";

const Key = "92366db4df0b4d48b14220ea95c1c81c";

const HomePage = () => {
    
    // const featuredRecipes = [
    //         {id: 638729, title: 'Chinese Veg Fried rice', image: 'https://spoonacular.com/recipeImages/638729-312x231.jpg', imageType: 'jpg'},
    //         {id: 1095996, title: 'Vegan Eggnog', image: 'https://spoonacular.com/recipeImages/1095996-312x231.jpg', imageType: 'jpg'},
    //         {id: 664547, title: 'Vegetable Dip', image: 'https://spoonacular.com/recipeImages/664547-312x231.jpg', imageType: 'jpg'},
    //         {id: 664748, title: 'Veggie Meatloaf', image: 'https://spoonacular.com/recipeImages/664748-312x231.jpg', imageType: 'jpg'},
    //         {id: 661223, title: 'Spicy Vegan Chili', image: 'https://spoonacular.com/recipeImages/661223-312x231.jpg', imageType: 'jpg'},
    //         {id: 664624, title: 'Vegetable Wontons', image: 'https://spoonacular.com/recipeImages/664624-312x231.jpg', imageType: 'jpg'},
    //         {id: 664664, title: 'Vegetarian Haggis', image: 'https://spoonacular.com/recipeImages/664664-312x231.jpg', imageType: 'jpg'},
    //         {id: 664573, title: 'Vegetable Noodles', image: 'https://spoonacular.com/recipeImages/664573-312x231.jpg', imageType: 'jpg'},
    //         {id: 664472, title: 'Vegan Potato Salad', image: 'https://spoonacular.com/recipeImages/664472-312x231.jpg', imageType: 'jpg'},
    //         {id: 664396, title: 'Vegan Beet Borscht', image: 'https://spoonacular.com/recipeImages/664396-312x231.jpg', imageType: 'jpg'},
    //         {id: 662263, title: 'Summer Veggie Bake', image: 'https://spoonacular.com/recipeImages/662263-312x231.jpg', imageType: 'jpg'},
    // ]
    const [featuredRecipes, setFeaturedRecipes] = React.useState([]);

    React.useEffect(() => {
        fetchData();
        async function fetchData() {
        
            try {
            const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=12&instructionsRequired=true&apiKey=${Key}`)
                
            let data = result.data.results;
       
                setFeaturedRecipes(data);
    
            } catch (error) {
                console.error(error);
                
            }
        
        }
    }, [setFeaturedRecipes]);
    
    const [searchedRecipes, setSearchedRecipes] = React.useState([]);
    
    const [input, setInput] = React.useState('');
    const [searchInput, setSearchInput] = React.useState('');
    const [recipeId, setRecipeId] = React.useState(0);
    const [recipeInfo, setRecipeInfo] = React.useState([]);
    const [recipeInfoPage, setRecipInfoPage] = React.useState(false);
    
    

    const viewRecipeInfo = (e) => {
       
        setRecipeId(e.target.id)
        console.log(recipeId)
    }

    React.useEffect(() => {
        async function fetchData() {
            
            try {
            const result = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${Key}`)
            let data = result.data;
               
                setRecipeInfo(data);
                setRecipInfoPage(true);
                
    
            } catch (error) {
                // console.error(error);
                
            }
        }
        fetchData();
    }, [recipeId])
    
    const closeRecipeInfo = () => {
        setRecipInfoPage(false);
        setRecipeId(0);
    }

    React.useEffect(() => {
        console.log(searchInput)
        if (searchInput !== '') {
            async function fetchData() {
            
                try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchInput}&instructionsRequired=true&&number=12&apiKey=${Key}`)
                    
                let data = result.data.results;
                    console.log(result)
                    setSearchedRecipes(data);
        
                } catch (error) {
                    console.error(error);
                    
                }
    
            
            }
            fetchData();

        } else {
            setSearchedRecipes([])
        }
    }, [searchInput]);



    const onSearchTextChange = (e) => {
        
        setInput(e.target.value);
    }

    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSearchInput(event.target.value)
            setAutoRecipe([])
        }
        if (event.key === 'Backspace') {
            setSearchInput('')
            
        }
    }
  

  
    const [searchPage, setSearchPage] = React.useState(false);

    
    const changeSearchPage = () => {
        if (searchPage) {
           
            setSearchPage(false);
        } else {
            setSearchPage(true);
       }
        
    }
    
    const [autoRecipe, setAutoRecipe] = React.useState([]);

    React.useEffect(() => {
        
            async function fetchData() {
                try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/autocomplete?number=10&query=${input}&apiKey=${Key}`)
                    
                    let data = result.data;
                    setAutoRecipe(data);
        
                } catch (error) {
                    console.error(error);
                    
                }
            
            }
            fetchData();
        
    }, [input]);
   
    return (
        <>
            <Header />
            <SearchBar onSearchTextChange={onSearchTextChange} input={input} onKeyDown={handleKeyDown} autoRecipe={ autoRecipe }/>
            <SearchBy OnChange={ changeSearchPage } />
            
            {recipeInfoPage? <RecipeInfo Id={recipeId} Data={recipeInfo} Close={closeRecipeInfo} />:null}
          
            {searchPage? <SearchPage onClick={changeSearchPage}/>:null}
            <div className="recipes-body">
                {searchedRecipes.length>0 && <FeaturedRecipes Title="Searched Recipes:" Data={ searchedRecipes } OnClick={ viewRecipeInfo }/>} 
                <FeaturedRecipes Title="Featured Recipes:" Data={featuredRecipes} OnClick={ viewRecipeInfo }/>
            
            </div>
        </>
    )
}

export default HomePage
