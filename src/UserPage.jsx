import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeContainer from './RecipeContainer.jsx';
import Filters from './Filters.jsx';
import { deleteSavedFilter } from './api.js';

class UserPage extends Component {

  static propTypes = {
    savedRecipes: PropTypes.array,
    savedFilters: PropTypes.array,
    userUpdated: PropTypes.func
  }

  addFilter = () => {

  }
  removeFilter = (filterID) => {
    console.log(filterID);
    console.log(this.props.savedFilters);
    const savedFilterID = this.props.savedFilters[filterID].saved_filter_id;
    deleteSavedFilter(savedFilterID, this.props.userUpdated);
  }
  updateFilter = () => {

  }

  render() {
    const recipes = this.props.savedRecipes.map(
      recipe => {
        recipe.id = recipe.recipe_id;
        return recipe;
      });
    return (
      <div>
        <RecipeContainer recipes={recipes} savedRecipes={this.props.savedRecipes} userUpdated={this.props.userUpdated} />
        <Filters filters={this.props.savedFilters} addFilter={this.addFilter} removeFilter={this.removeFilter} updateFilter={this.updateFilter} />
      </div>
      // <div className="col user-recipes">
      //   <div className="row">
      //     <div className="col-4">
      //   <a href="#demo" className="btn btn-secondary col" data-toggle="collapse">Your preset filters</a>
      //    <div id="demo" className="collapse col">
      //     <ul className="list-group">
      //       <li className="list-group-item">Cras justo odio</li>
      //       <li className="list-group-item">Dapibus ac facilisis in</li>
      //     </ul>
      //   </div>
      //   <a href="#demo2" className="btn btn-secondary col" data-toggle="collapse">Your Recipes</a>
      //     <div id="demo2" className="collapse col">
      //       <ul className="list-group">
      //         <li className="list-group-item"> <a href="#demo3" className="btn btn-secondary col" data-toggle="collapse">Dinner</a></li>
      //         <li className="list-group-item">Breakfast</li>
      //       </ul>
      //     </div>
      //     </div>
      //     <div className="user-recipe-list-card">
      //   </div>
      //   <div id="demo3" className="collapse col">
      //   </div>
      //   </div>
      // </div>

    );
  }
}
export default UserPage;

// Can save dietary restrictions/preferences/filter settings
// Can have favourites
// Data on things they liked, want to try,
