import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'proptypes';
import RecipeContainer from './RecipeContainer.jsx';

class SearchResults extends Component {

  static propTypes = {
    searchResponse: PropTypes.array,
    savedRecipes: PropTypes.array,
    userUpdated: PropTypes.func
  }

  render() {
    return (
      <div className="results">
        <div id="search-result-list" className='jumbotron content-blocks'>
          <h1 className="text-center">Recommendations</h1>
          <hr />
          <RecipeContainer recipes = {this.props.searchResponse} savedRecipes = {this.props.savedRecipes} userUpdated = {this.props.userUpdated} count={4}/>
          <hr />
          <div className='d-flex justify-content-center'>
            <NavLink className="nav-link" activeClassName="nav-link" to='/'><button className="btn btn-success">Do a different search</button></NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchResults;

