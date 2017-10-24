import React, { Component } from 'react';
import RecipeDetailsLinks from './RecipeDetailsLinks.jsx';
import RecipeDetailsIngredients from './RecipeDetailsIngredients.jsx';
import RecipeDetailsInstructions from './RecipeDetailsInstructions.jsx';

// delete when api calls functioning
import dummyRecipeData from './_dummyRecipeData';

class RecipeDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      recipeData: {} 
    };
  }

  componentWillMount() {

  // Replace this with fetch to API:

  this.setState({recipeData: dummyRecipeData})


  }


  render() {
    const recipe = this.state.recipeData;

    const instructions = recipe.analyzedInstructions[0].steps.map(step => {
      return <RecipeDetailsInstructions stepcount={ step.number }
                                        stepdesc={ step.step } />;
    });

    console.log(recipe);
    console.log(recipe.analyzedInstructions);
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
      < RecipeDetailsIngredients ingredients={ recipe.extendedIngredients[0] }/>
      <div className="recipe-details-instructions">
      <h5>Instructions:</h5>
        <ul>
          {instructions}
        </ul>
    </div>
    </div>
  );
}
}
export default RecipeDetails;

