import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeDetailsIngredients from './RecipeDetailsIngredients.jsx';
import RecipeDetailsInstructions from './RecipeDetailsInstructions.jsx';
import CategorySelector from './CategorySelector.jsx';
import { getRecipeDetails, saveRecipe, deleteRecipe } from './api.js';

class RecipeDetails extends Component {

  constructor(props) {
    super(props);

    const recipeData = this.findMatchingRecipe();
    this.state = { recipeData, ...this.isSaved(this.props) };
  }

  isSaved(props) {
    const match = props.savedRecipes.find(saved => saved.id === props.id);
    return match ? { saved: true, category: match.category } : { saved: false, category: '' };
  }

  findMatchingRecipe() {
    const matchByID = recipe => recipe && recipe.id === this.props.id;
    const fromSearch = this.props.searchResponse.find(matchByID);
    const fromSaved = this.props.savedRecipes.find(matchByID);
    return fromSearch || fromSaved || {};
  }

  static propTypes = {
    searchResponse: PropTypes.array,
    savedRecipes: PropTypes.array,
    id: PropTypes.number,
    userUpdated: PropTypes.func,
    categories: PropTypes.array
  }

  componentDidMount() {
    getRecipeDetails(this.props.id)
      .then(recipeData => {
        this.setState({ recipeData });
      });
  }

  componentWillReceiveProps(props) {
    this.setState({ ...this.isSaved(props) });
  }

  saveButton() {
    if(this.state.saved) {
      const unsave = () => {
        this.setState({ saved: false });
        deleteRecipe(this.props.id, this.props.userUpdated);
      };
      return <button type="button" className="btn btn-save"><i className="fa fa-lg fa-bookmark" aria-hidden="true" onClick={unsave}></i><br /> Saved</button>;
    }
    else {
      const save = () => {
        this.setState({ saved: true });
        saveRecipe(this.props.id, this.props.userUpdated);
      };
      return <button type="button" className="btn btn-save"><i className="fa fa-lg fa-bookmark-o" aria-hidden="true" onClick={save}></i><br /> Save</button>;
    }
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
          <div className="col-4">
            <img className='recipe-details-img' src={recipe.image} alt="Recipe image"></img>
            <div className="recipe-details-links d-flex justify-content-between">
              <button type="button" className="btn btn-save"><i className="fa fa-lg fa-arrow-left" aria-hidden="true" onClick={() => window.history.back()}></i><br /> Back</button>
              {this.state.saved && <CategorySelector id={this.props.id} userUpdated={this.props.userUpdated} categoryList={this.props.categories} category={this.state.category} />}
              {this.saveButton()}
            </div>
          </div>
          <div className="col-8 text-center">
            <h4 className="display-4">
              {recipe.title}
            </h4>
            <h5 className="recipe-byline">By {recipe.sourceName}</h5>
            <small className="text-muted"> Time required: {recipe.readyInMinutes} minutes</small>
          </div>
        </div>
        <hr className="recipe-details-hr" />
        <div className="row recipe-info">
          <div className='col-4'>
            <div className="recipe-details-ingredients">
              <h3 className='text-center'>Ingredients</h3>
              <ul className='fa-ul'>
                {ingredients}
              </ul>
            </div>
          </div>
          <div className='col-8'>
            <div className="recipe-details-instructions">
              <h3 className="text-center">Instructions</h3>
              <ol>
                {instructions}
              </ol>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-main" onClick={() => window.history.back()}>Back</button>
        </div>
      </div>
    );
  }
}
export default RecipeDetails;

