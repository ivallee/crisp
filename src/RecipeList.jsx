import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeCard from './RecipeCard.jsx';

class RecipeList extends Component {

  static propTypes = {
    recipes: PropTypes.array
  }



  render() {
    console.log('Recipe List:', this.props.recipes);
  
    const recipeList = this.props.recipes.slice(0, 4).map(recipe => {
      return <RecipeCard 
        id={recipe.id}
        title={recipe.title}
        image={recipe.image}
        time={recipe.readyInMinutes}
        servings={recipe.servings}
        sourceName={recipe.sourceName}
        key={recipe.id}
      />;
    });
    return (
      <div className="recipe-list">



        <div className="row">
          {recipeList}
        </div>
  

      </div>


    );
  }
}
export default RecipeList;

