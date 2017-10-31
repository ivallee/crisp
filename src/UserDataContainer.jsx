import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { getUser, getUserRecipes, getUserFilters, getUserCategories, getRecipeDetails } from './api.js';

class UserDataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: '',
      savedRecipes: [],
      savedFilters: [],
      categories: []
    };
  }

  static propTypes = {
    children: PropTypes.node
  }

  loadUserData = async () => {
    const user = await getUser();
    if(user) {
      const savedRecipes = await getUserRecipes();
      const savedFilters = await getUserFilters();
      const categories = await getUserCategories();
      this.setState({ username: user.name, loggedIn: true, savedRecipes, savedFilters, categories });

      for (let recipe of savedRecipes) {
        await this.loadRecipeData(recipe);
      }
      this.setState(savedRecipes);
    }
    else {
      this.setState({ username: '', loggedIn: false, savedRecipes: [], savedFilters: [] });
    }
  }

  loadRecipeData = async (recipe) => {
    const recipeData = await getRecipeDetails(recipe.id);
    console.log('RecipeData', recipeData);
    const selected = (({ image, recipes, servings, sourceName, title, readyInMinutes }) => ({ image, recipes, servings, sourceName, title, readyInMinutes }))(recipeData);
    console.log('Selected:', selected);
    Object.assign(recipe, selected);
  }

  componentDidMount() {
    this.loadUserData();
  }

  render() {
    const userData = this.state;
    userData.userUpdated = this.loadUserData;
    let children = React.Children.map(this.props.children, child => React.cloneElement(child, userData));
    return <div>{children}</div>;
  }
}
export default UserDataContainer;