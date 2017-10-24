import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeCard from './RecipeCard.jsx';

class RecipeList extends Component {

  static propTypes = {
    recipes: PropTypes.array
  }



  render() {
    console.log('Recipe List:', this.props.recipes);
    const recipeList = this.props.recipes.map(recipe => {
      return <RecipeCard 
        title={recipe.title}
        image={recipe.image}
        time={recipe.readyInMinutes}
        servings={recipe.servings}
        key={recipe.id}
      />;
    });
    return (
      <div className="recipe-list">


        {/* Need to implement way of generating results into bootstrap columns */}
        <div className="row">
          {recipeList}
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

