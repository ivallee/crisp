import React, { Component } from 'react';
import RecipeDetailsLinks from './RecipeDetailsLinks.jsx';
import RecipeDetailsIngredients from './RecipeDetailsIngredients.jsx';
import RecipeDetailsInstructions from './RecipeDetailsInstructions.jsx';

// delete when api calls functioning
import dummyResults from './dummyresults.js';

class RecipeDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      response: [] 
    };
  }

  componentWillMount() {

  // Replace this with fetch to API:
  let response = dummyResults.results.filter((recipe) => {
    return recipe.id == this.props.match.params.id;
  });

  this.setState({ response });


}


render() {
  /////////////////////////

  // const recipeById = this.props.searchResponse.filter((recipe) => {
  //   return recipe.id == 658674;

  // });

  const recipe = this.state.response[0];
  console.log(this.state);

  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <img className="img-thumbnail" src={recipe.image} alt="Card image cap"></img>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <h4>
            {recipe.title}
          </h4>
          <h5>By {recipe.sourceName}</h5>
            <small className="text-muted"> Time required: {recipe.readyInMinutes} minutes</small>
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

