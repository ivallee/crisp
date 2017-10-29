import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeList from './RecipeList.jsx';

class SearchRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: this.buildRecipes(this.props) };
  }

  buildRecipes = (props) => {
    const recipes = props.searchResponse;
    recipes.map(recipe => {
      recipe.saved = props.savedRecipes.some(user => user.recipe_id === recipe.id);
      return recipe;
    });
    return recipes;
  }

  componentWillReceiveProps(props) {
    this.state = { recipes: this.buildRecipes(props) };
  }

  static propTypes = {
    searchResponse: PropTypes.array,
    savedRecipes: PropTypes.array,
    userUpdated: PropTypes.func
  }

  render() {
    return (<RecipeList recipes={this.state.recipes} recipeCount={4} userUpdated={this.props.userUpdated}/>);
  }
}
export default SearchRecipes;