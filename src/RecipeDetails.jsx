import React, { Component } from 'react';
import RecipeDetailsLinks from './RecipeDetailsLinks.jsx';
import RecipeDetailsIngredients from './RecipeDetailsIngredients.jsx';
import RecipeDetailsInstructions from './RecipeDetailsInstructions.jsx';

class RecipeDetails extends Component {

  render() {
    return (
      <div>
        {/* <div className="jumbotron">
          <p className="lead">This is where recipe details should go! props.match.params.id is: {parseInt(this.props.match.params.id)} </p>
        </div> */}
        <div className="row">
          <div className="col-sm-6">
            <img className="img-thumbnail" src={'../docs/grilledcheese.jpg'} alt="Card image cap"></img>
         </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
          <h4>
            Toasty Toast
            <small className="text-muted"> Time required: 30 minutes</small>
          </h4>    
          </div>
        </div>
        < RecipeDetailsLinks />
        < RecipeDetailsIngredients />
        < RecipeDetailsInstructions />
      </div>
    );
  }
}
export default RecipeDetails;

