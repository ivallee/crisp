import React, { Component } from 'react';

function RecipeDetailsInstructions({ stepCount, stepDesc }) {
  return (
      <li>{stepCount}. {stepDesc}</li>
  );
}
export default RecipeDetailsInstructions;
