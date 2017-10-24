import React, { Component } from 'react';

class RecipeDetailsInstructions extends Component {
  
  render() {
    const instructions = this.props.instructions[0].steps.map(step => {
      console.log(`${step.number}. ${step.step}`)
      return (<li>{step.number}. {step.step}</li>);
    })
    // console.log(instructions);

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
