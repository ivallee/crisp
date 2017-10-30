import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeContainer from './RecipeContainer.jsx';
import Filters from './Filters.jsx';
import { saveFilter, updateSavedFilter, deleteSavedFilter } from './api.js';

class UserPage extends Component {

  static propTypes = {
    savedRecipes: PropTypes.array,
    savedFilters: PropTypes.array,
    userUpdated: PropTypes.func
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

  render() {
    return (
      <div className="col user-recipes">
        <div className="user-page-jumbo">
          <h5 className="display-4">Hello Grateful User</h5>
          <p className="">Crisp is a recipe recommendation engine for people who are looking to try cooking more meatless and plant-based meals.</p>
          <p className="">On this page you can update your preset filters and manage your recipes. The filters will be set automatically for you when you do a search.</p>
          <p className="">You can disable them at the search page as well, if you would like to exclude them temporarily.</p>
          <p className="">Management of your recipes is done through categorization. You can create new categories, remove old ones, and move your saved recipes to another category </p>
        </div>
        <div className="row">
          <div className="col-4">
            <a href="#demo" className="btn btn-secondary col" data-toggle="collapse">Your preset filters</a>
            <div id="demo" className="collapse col">
              <ul className="list-group col-10">
                <Filters filters={this.props.savedFilters} addFilter={this.addFilter} removeFilter={this.removeFilter} updateFilter={this.updateFilter} />
              </ul>
            </div>
            <a href="#demo2" className="btn btn-secondary col" data-toggle="collapse">Your Recipes</a>
            <div id="demo2" className="collapse col">
              <ul className="list-group col-10">
                <li className="list-group-item"> <a href="#demo3" className="btn btn-secondary col" data-toggle="collapse">Dinner</a></li>
                <li className="list-group-item">Breakfast</li>
                <li className="list-group-item">Spicy</li>
                <li className="list-group-item">Other people's favorites</li>
                <li className="list-group-item">Sunday Meals</li>
              </ul>
            </div>
          </div>
          <div className="user-recipe-list-card">
          </div>
          <div id="demo3" className="collapse col">
            <RecipeContainer recipes={this.props.savedRecipes} savedRecipes={this.props.savedRecipes} userUpdated={this.props.userUpdated} />
          </div>
        </div>
      </div>


    );
  }
}
export default UserPage;
