import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Search from './Search.jsx';
import RecipeList from './RecipeList.jsx';

class SearchResults extends Component {

  static propTypes = {
    searchResponse: PropTypes.array
  }

  render() {
    const recipes = this.props.searchResponse;
    console.log('SearchResults:', recipes);
    return (
      <div className="results">
        <Search />
        <div id="search-result-list">
          <h3 id="search-result-list-header">Results</h3>
          <p>Here are some recipes based on your search criteria.</p>
        </div>


        
        {/* <div className="row marketing">
          <div className="col">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Start a new search</label>
              <input type="text" className="form-control" placeholder="What would you like?"></input>
            </div>
          </div>
        </div> */}


        <RecipeList recipes={recipes} />
      </div>
    );
  }
}
export default SearchResults;

