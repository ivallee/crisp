import React from 'react';
import PropTypes from 'proptypes';

RecipeDetailsIngredients.propTypes = {
  ingredient: PropTypes.string
};

function RecipeDetailsIngredients({ ingredient }) {
  return <li><i className="fa fa-li fa-angle-right" aria-hidden="true"></i><small>{ingredient}</small></li>;
}
export default RecipeDetailsIngredients;
