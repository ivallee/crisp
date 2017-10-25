import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeList from './RecipeList.jsx';

class SearchResults extends Component {

  static propTypes = {
    searchResponse: PropTypes.array
  }

  render() {
    const recipes = this.props.searchResponse;
    return (
      <div className="user-recipes">
        <div className="user-recipes-list">
          <h3 className="user-recipes-list-header">Your favourite recipes</h3>
        </div>
        <div className="user-recipe-list-card">
        <RecipeList recipes={recipes} />
        </div>
          <nav aria-label="...">
            <ul className="pager">
              <li className="previous disabled"><a href="#"><span aria-hidden="true">&larr;</span> Older</a></li>
              <li className="next"><a href="#">Newer <span aria-hidden="true">&rarr;</span></a></li>
            </ul>
          </nav>
        <div>
        <h5>Dietary restrictions</h5>
          <a href="#demo" className="btn btn-info" data-toggle="collapse">Your preset filters. Update default filter settings here</a>
          <div id="demo" className="collapse">
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
           </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchResults;

// Can save dietary restrictions/preferences/filter settings
// Can have favourites
// Data on things they liked, want to try, 
 