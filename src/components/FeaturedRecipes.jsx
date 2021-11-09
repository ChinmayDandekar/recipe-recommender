import React from 'react'
import RecipeCards from './RecipeCards'

const FeaturedRecipes = ({ Title, Data, OnClick }) => {
    return (
        <div className="featured-recipes">
            <h2>{ Title }</h2>
            <RecipeCards Data={Data} OnClick={ OnClick }/>
        </div>
    )
}

export default FeaturedRecipes
