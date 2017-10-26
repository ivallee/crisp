import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipeDetailsLinks extends Component {
  
  render() {
    return (
      <div className="recipe-details-links">
        <div className="row">
          <Link to='/results' className='nav-link'>Back to results</Link>
        </div>
        <div className="row" id='recipe-details-toolbar'>                                     
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">Ingredients</button>
            <button type="button" className="btn btn-secondary">Instructions</button>
            <button type="button" className="btn btn-info">Save</button>
            <button type="button" className="btn btn-danger">Banish</button>
            {/* Make buttons functional */}
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeDetailsLinks;


