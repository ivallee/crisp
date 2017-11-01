import React from 'react';
import PropTypes from 'proptypes';

RecipeDetailsInstructions.propTypes = {
  stepCount: PropTypes.number,
  stepDesc: PropTypes.string
};

function RecipeDetailsInstructions({ stepCount, stepDesc }) {
  return <li>{stepCount}. {stepDesc}</li>;
}
export default RecipeDetailsInstructions;
