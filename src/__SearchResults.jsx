import React, { Component } from 'react';
import Search from './Search.jsx';
import PropTypes from 'proptypes';

class SearchResults extends Component {

  render() {
    return (
      <div>
      <div className="jumbotron">
        <p className="lead">This is where results should go!</p>
      </div>

      <Search />
      </div>
    );
  }
}
export default SearchResults;

