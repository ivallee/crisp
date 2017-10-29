import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeList from './RecipeList.jsx';

class SearchRecipes extends Component {
  constructor(props) {
    super(props);

    const recipes = this.props.searchResponse;
    recipes.map(recipe => {
      recipe.saved = this.props.savedRecipes.some(user => user.recipe_id === recipe.id);
      return recipe;
    });

    this.state = { recipes };
  }

  static propTypes = {
    searchResponse: PropTypes.array,
    savedRecipes: PropTypes.array
  }

  render() {
    return (<RecipeList recipes={this.state.recipes} recipeCount={7}/>);
  }
}
export default SearchRecipes;