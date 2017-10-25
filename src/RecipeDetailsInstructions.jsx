import React, { Component } from 'react';
import PropTypes from 'prop-types';

RecipeDetailsInstructions.propTypes = {
  stepCount: PropTypes.number,
  stepDesc: PropTypes.string
};

function RecipeDetailsInstructions({ stepCount, stepDesc }) {
  

  return (
      <li>{stepCount}. {stepDesc}</li>
  );
}
export default RecipeDetailsInstructions;
