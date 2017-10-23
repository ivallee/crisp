import React, { Component } from 'react';

class RecipeDetailsIngredients extends Component {
  
  render() {
    return (
      <div className="recipe-details-ingredients">
        <h5>Ingredients:</h5>
        <ul>
          <li>Basil</li>
          <li>Tomato</li>
          <li>Cheese</li>
          <li>White Bread</li>
          <li>Butter</li>
        </ul>
      </div>
    );
  }
}
export default RecipeDetailsIngredients;
