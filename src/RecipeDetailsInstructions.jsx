import React, { Component } from 'react';

class RecipeDetailsInstructions extends Component {
  
  render() {
    const instructions = this.props.instructions.steps.map(step => {
      return (<li>{step.number}. {step.step}</li>);
    });

    return (
    <div className="recipe-details-instructions">
      <h5>Instructions:</h5>
      <ul>
        {instructions}
      </ul>
    </div>
    );
  }
}
export default RecipeDetailsInstructions;
