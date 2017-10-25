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
        <div className="card">
            <div className="card-block">
              {/* <Link to={`/recipes/${this.props.id}`} className="recipe-card-link"> */}
              <div className="row">
                <div className="col">
                  <h4 className="card-title">Yummy</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <img className="img-thumbnail" src={this.props.image} alt="recipe thumbnail"></img>
                </div>
                <div className="col-sm-6">
                  <ul className="list-unstyled">
                    <li>
                      <small>Time: Short</small>
                    </li>
                    <li>
                      <small>From: Home</small>
                    </li>
                    <li>
                      <small>Servings: plenty</small>
                    </li>
                  </ul>
                </div>
              </div>
              {/* </ Link> */}
              <div className="btn-group btn-group-sm" role="group">
              <button type="button" className="close" aria-label="Remove" onClick={e => this.remove(e)}>
                <span aria-hidden="true">&times;</span>
              </button>
                <button type="button" className="btn btn-danger">Never</button>
                <button type="button" className="btn btn-success">Try later</button>
              </div>
            </div>
          </div>
        {/* <RecipeList recipes={recipes} /> */}
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
 