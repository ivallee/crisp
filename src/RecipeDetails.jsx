import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecipeDetailsIngredients from './RecipeDetailsIngredients.jsx';
import RecipeDetailsInstructions from './RecipeDetailsInstructions.jsx';
import axios from 'axios';

// delete when api calls functioning
import dummyRecipeData from './_dummyRecipeData';

class RecipeDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipeData: {},
    };
  }




  componentWillMount() {

    // Replace this with fetch to API:


    // console.log(dummyRecipeData);

    // this.setState({recipeData: dummyRecipeData});

    axios.get(`http://localhost:8080/recipes/${this.props.match.params.id}`)
      .then(response => {
        console.log(response.data);
        this.setState({ recipeData: response.data })
      });

  }

  componentDidMount() {
  }

  render() {
    const recipe = this.state.recipeData;



    const instructions = recipe.analyzedInstructions && recipe.analyzedInstructions[0].steps.map(step => {
      return <RecipeDetailsInstructions stepCount={step.number}
        stepDesc={step.step}
        key={step.number} />;
    });

    const ingredients = recipe.extendedIngredients && recipe.extendedIngredients.map(ingredient => {
      return <RecipeDetailsIngredients ingredient={ingredient.originalString}
        key={ingredient.id} />;
    });

    return (
      <div className='jumbotron content-blocks'>
        <div className="row">
          <div className="col-sm-6 d-flex justify-content-center">
            <img className='recipe-details-img' src={recipe.image} alt="Recipe image"></img>
          </div>
          <div className="col-sm-6">
            <h4>
              {recipe.title}
            </h4>
            <h5>By {recipe.sourceName}</h5>
            <small className="text-muted"> Time required: {recipe.readyInMinutes} minutes</small>
            <div className="recipe-details-links d-flex justify-content-between">
              <button type="button" className="btn btn-info">Save this recipe</button>
              {/* Make buttons functional */}
              <Link to='/results'><button type="button" className="btn btn-info">Back to reccomendations</button></Link>
            </div>
          </div>

        </div>
        <div className="row recipe-info">
          <div className='col-6'>
            <div className="recipe-details-ingredients">
              <h5>Ingredients:</h5>
              <div className='well'>
                <ul>
                  {ingredients}
                </ul>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className="recipe-details-instructions">
              <h5>Instructions:</h5>
              <ul>
                {instructions}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeDetails;

