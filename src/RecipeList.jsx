import React, { Component } from 'react';
import RecipeCard from './RecipeCard.jsx';

class RecipeList extends Component {
  
  // Function to generate list of cards should probably go here


  render() {
    const recipes = this.props.recipes;
    console.log('Recipe List:', recipes)
    return (
      <div className="recipe-list">


        {/* Need to implement way of generating results into bootstrap columns */}
        <div className="row">
          <RecipeCard recipes={recipes}/>
          {/* <RecipeCard /> */}
        </div>
        <div className="row">
          {/* <RecipeCard />
          <RecipeCard /> */}
        </div>
        
      </div>


    );
  }
}
export default RecipeList;

