import React from 'react';
import PropTypes from 'proptypes';

RecipeDetailsInstructions.propTypes = {
  stepCount: PropTypes.number,
  stepDesc: PropTypes.string
};

function RecipeDetailsInstructions({ stepDesc }) {
  return (
    <div>
    <li>{stepDesc}</li><br />
    </div>
  )
    
}
export default RecipeDetailsInstructions;
