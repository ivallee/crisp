import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeContainer from './RecipeContainer.jsx';
import Filters from './Filters.jsx';
import Categories from './Categories.jsx';
import { saveFilter, updateSavedFilter, deleteSavedFilter, createCategory, deleteCategory } from './api.js';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '',
      recipes: this.buildRecipeList(this.props.savedRecipes, '')
    };
  }

  static propTypes = {
    savedRecipes: PropTypes.array,
    savedFilters: PropTypes.array,
    categories: PropTypes.array,
    userUpdated: PropTypes.func
  }

  componentWillReceiveProps(props) {
    this.setState({ recipes: this.buildRecipeList(props.savedRecipes, this.state.selectedCategory) });
  }

  addFilter = (filter) => {
    const { type, value, exclude } = filter;
    saveFilter(type, value, exclude, this.props.userUpdated);
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
    return (
      <div className="user-recipes">
        <div className="user-page-jumbo jumbotron content-blocks">
          <h5 className="display-4">User dashboard</h5>
          <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente dicta asperiores, odit animi corporis obcaecati explicabo quam labore eaque maiores praesentium iste voluptatibus doloremque! Ipsa dignissimos est enim adipisci.</p>
          {/* <p className="lead">Crisp is a recipe recommendation engine for people who are looking to try cooking more meatless and plant-based meals.</p>
          <p className="lead">On this page you can update your preset filters and manage your recipes. The filters will be set automatically for you when you do a search.</p>
          <p className="lead">You can disable them at the search page as well, if you would like to exclude them temporarily.</p>
          <p className="lead">Management of your recipes is done through categorization. You can create new categories, remove old ones, and move your saved recipes to another category </p> */}

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
        <div className="row">
          <div className="col-4">
            <a href=".demo2" className="btn btn-secondary col" data-toggle="collapse">Your Recipes</a>
            <div className="collapse col demo2">
              <Categories categories={this.props.categories} addCategory={this.addCategory} changeCategory={this.changeCategory} deleteCategory={this.deleteCategory} selectedCategory={this.state.selectedCategory} />
            </div>
          </div>
          <div className="collapse col demo2">
            <RecipeContainer recipes={this.state.recipes} savedRecipes={this.props.savedRecipes} userUpdated={this.props.userUpdated} categories={this.props.categories} />
          </div>
        </div>
      </div>


    );
  }
}
export default UserPage;
