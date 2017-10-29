import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeCard from './RecipeCard.jsx';
import axios from 'axios';

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


  getUserRecipes = () => {
    axios.get('http://localhost:3000/api/users/recipes')
    .then((recipes) => console.log(recipes))
    .catch(error => {
      console.log(error);
    });
  }

  
  render() {
    const recipeCards = this.renderRecipes();
    this.getUserRecipes();
    return (

      <div className="recipe-list">
        <div className="row">
          {recipeCards}
        </div>
      </div>


    );
  }
}
export default RecipeList;

