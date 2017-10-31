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
      this.mergeSavedRecipes(savedRecipes);
      this.setState({ username: user.name, loggedIn: true, savedRecipes, savedFilters, categories });

      for (const recipe of savedRecipes) {
        if(recipe.needsData) {
          await this.loadRecipeDetails(recipe);
        }
      }
      this.setState(savedRecipes);
    }
    else {
      this.setState({ username: '', loggedIn: false, savedRecipes: [], savedFilters: [] });
    }
  }

  mergeRecipeDetails = (target, source) => {
    const sourceDetails = (({ image, recipes, servings, sourceName, title, readyInMinutes }) => ({ image, recipes, servings, sourceName, title, readyInMinutes }))(source);
    Object.assign(target, sourceDetails);
  }

  mergeSavedRecipes = (recipes) => {
    for(const recipe of recipes) {
      const match = this.state.savedRecipes.find(savedRecipe => recipe.id === savedRecipe.id);
      if(match) {
        this.mergeRecipeDetails(recipe, match);
      }
      else {
        recipe.needsData = true;
      }
    }
  }

  loadRecipeDetails = async (recipe) => {
    const response = await getRecipeDetails(recipe.id);
    this.mergeRecipeDetails(recipe, response);
    recipe.needsData = false;
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