import React, { Component } from 'react';
import PropTypes from 'proptypes';
import SearchRecipes from './SearchRecipes.jsx';

class SearchResults extends Component {

  static propTypes = {
    searchResponse: PropTypes.array
  }

  render() {
    return (
      <div className="results">
        <div id="search-result-list" className='jumbotron content-blocks'>
          <h3 id="search-result-list-header" className="text-center">Recommendations:</h3>
          <SearchRecipes {...this.props} />
          <div className='d-flex justify-content-center'>
            <a className='back-btn' href='/'><button className="btn btn-success">Do a different search</button></a>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchResults;

