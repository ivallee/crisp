import React, { Component } from 'react';

function RecipeDetailsInstructions({ stepcount, stepdesc }) {
  return (
      <li>{stepcount}. {stepdesc}</li>
  );
}
export default RecipeDetailsInstructions;
