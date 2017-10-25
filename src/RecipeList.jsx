import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeCard from './RecipeCard.jsx';

class RecipeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: this.props.recipes
    };
  }

  static propTypes = {
    recipes: PropTypes.array
  }

  removeRecipe = (index) => {
    this.state.recipes.splice(index, 1, this.state.recipes[4]);
    this.state.recipes.splice(4,1);
    this.setState({
      recipes: this.state.recipes
    });
  
  }

  renderRecipes = () => { 
    return this.state.recipes.slice(0, 4).map((recipe, index) => {
      return <RecipeCard
      id={recipe.id}
      index={index}
      title={recipe.title}
      image={recipe.image}
      time={recipe.readyInMinutes}
      servings={recipe.servings}
      sourceName={recipe.sourceName}
      key={recipe.id}
      removeRecipe={this.removeRecipe}
    />;
    });
  };
  
  render() {
    const recipeList = this.renderRecipes();
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

