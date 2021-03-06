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
    count: PropTypes.number,
    categories: PropTypes.array
  }

  buildRecipes = (props) => {
    const { recipes, savedRecipes } = props;
    recipes.map(recipe => {
      recipe.saved = savedRecipes.some(saved => saved.id === recipe.id);
      return recipe;
    });
    return recipes;
  }

  componentWillReceiveProps(props) {
    this.state = { recipes: this.buildRecipes(props) };
  }

  render() {
    return (<RecipeList recipes={this.state.recipes} recipeCount={this.props.count} userUpdated={this.props.userUpdated} categories={this.props.categories}/>);
  }
}
export default RecipeContainer;