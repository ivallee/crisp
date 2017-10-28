import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';
import Search from './Search.jsx';
import RecipeList from './RecipeList.jsx';

class SearchResults extends Component {

  static propTypes = {
    searchResponse: PropTypes.array
  }

  render() {
    const recipes = this.props.searchResponse;
    return (
      <div className="results">

        
        <div id="search-result-list" className='jumbotron content-blocks'>
        <h3 id="search-result-list-header" className="text-center">Reccomendations:</h3>
        <RecipeList recipes={recipes} />
        <div className='d-flex justify-content-center'>
        <a className='back-btn' href='/'><button className="btn btn-success">Do a different search</button></a>
        </div>
        </div>


      </div>
    );
  }
}
export default SearchResults;

