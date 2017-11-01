import React from 'react';
import PropTypes from 'proptypes';

RecipeDetailsInstructions.propTypes = {
  stepCount: PropTypes.number,
  stepDesc: PropTypes.string
};

function RecipeDetailsInstructions({ stepDesc }) {
  return <li>{stepDesc}</li>;
}
export default RecipeDetailsInstructions;
