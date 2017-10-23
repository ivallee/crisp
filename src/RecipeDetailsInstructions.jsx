import React, { Component } from 'react';

class RecipeDetailsInstructions extends Component {
  
  render() {
    return (
    <div className="recipe-details-instructions">
      <h5>Instructions:</h5>
      <ul>
        <li>Turn on oven and set to 350F</li>
        <li>Slice tomato</li>
        <li>Slice cheese</li>
        <li>Butter your bread and cover in cheese</li>
        <li>Bake for 5 minutes? </li>
        <li>Remove from oven and add tomato and basil</li>
        <li>Consume</li>
      </ul>
    </div>
    );
  }
}
export default RecipeDetailsInstructions;
