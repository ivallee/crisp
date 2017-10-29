import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipeDetailsLinks extends Component {

  render() {
    return (
        <div className="recipe-details-links d-flex justify-content-between">
          <button type="button" className="btn btn-info">Save this recipe</button>
          {/* Make buttons functional */}
          <Link to='/results'><button type="button" className="btn btn-info">Back to reccomendations</button></Link>
        </div>
    );
  }
}
export default RecipeDetailsLinks;


