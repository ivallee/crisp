import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeContainer from './RecipeContainer.jsx';
import Filters from './Filters.jsx';
import Categories from './Categories.jsx';
import { Redirect } from 'react-router-dom';
import { saveFilter, updateSavedFilter, deleteSavedFilter, createCategory, deleteCategory } from './api.js';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '',
      recipes: this.buildRecipeList(this.props.savedRecipes, ''),
    };
  }

  static propTypes = {
    savedRecipes: PropTypes.array,
    savedFilters: PropTypes.array,
    categories: PropTypes.array,
    userUpdated: PropTypes.func,
    username: PropTypes.string
  }

  componentWillReceiveProps(props) {
    this.setState({ recipes: this.buildRecipeList(props.savedRecipes, this.state.selectedCategory) });
  }

  addFilter = async (filter) => {
    const { type, value, exclude } = filter;
    return await saveFilter(type, value, exclude, this.props.userUpdated);
  }

  removeFilter = (filterID) => {
    const savedFilterID = this.props.savedFilters[filterID].saved_filter_id;
    deleteSavedFilter(savedFilterID, this.props.userUpdated);
  }

  updateFilter = (filter) => {
    const { saved_filter_id, value, exclude } = filter;
    updateSavedFilter(saved_filter_id, value, exclude, this.props.userUpdated);
  }

  addCategory = (category) => {
    createCategory(category.name, this.props.userUpdated);
  }

  buildRecipeList = (recipes, selectedCategory) => {
    return recipes.filter(recipe => {
      return selectedCategory === '' || recipe.category === selectedCategory;
    });
  }

  changeCategory = (selectedCategory) => {
    const recipes = this.buildRecipeList(this.props.savedRecipes, selectedCategory);
    this.setState({ selectedCategory, recipes });
  }

  deleteCategory = (category) => {
    deleteCategory(category, this.props.userUpdated);
  }

  render() {
    if(!this.props.username) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        <div className="jumbotron content-blocks">
          <h1 className="display-4 text-center">Your Recipes</h1>
          <hr />
          <p className="lead">Here you can manage your saved recipes, create new categories, and update your default filter settings</p>
          <div className="row marketing">
            <div className="col">
              <a href="#demo" className="btn btn-main btn-user-filter" data-toggle="collapse">Your filter settings</a>
              <div id="demo" className="collapse">
                <ul className="list-group">
                  <Filters filters={this.props.savedFilters} addFilter={this.addFilter} removeFilter={this.removeFilter} updateFilter={this.updateFilter} />
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div className="user-recipes">
          <div className="row">
            <div className="col-sm-3">
              <div className="category-sidebar">
                <Categories categories={this.props.categories} addCategory={this.addCategory} changeCategory={this.changeCategory} deleteCategory={this.deleteCategory} selectedCategory={this.state.selectedCategory} />
              </div>
            </div>
            <div className="col-sm-9">
              <RecipeContainer recipes={this.state.recipes} savedRecipes={this.props.savedRecipes} userUpdated={this.props.userUpdated} categories={this.props.categories} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserPage;
