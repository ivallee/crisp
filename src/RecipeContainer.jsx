import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeList from './RecipeList.jsx';

class RecipeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: this.buildRecipes(this.props) };
  }

  static propTypes = {
    recipes: PropTypes.array,
    savedRecipes: PropTypes.array,
    userUpdated: PropTypes.func,
    count: PropTypes.number
  }

  buildRecipes = (props) => {
    const { recipes, savedRecipes } = props;
    recipes.map(recipe => {
      recipe.saved = savedRecipes.some(user => user.recipe_id === recipe.id);
      return recipe;
    });
    return recipes;
  }

  componentWillReceiveProps(props) {
    this.state = { recipes: this.buildRecipes(props) };
  }

  render() {
    return (<RecipeList recipes={this.state.recipes} recipeCount={this.props.count} userUpdated={this.props.userUpdated} />);
  }
}
export default RecipeContainer;