import React, { Component } from 'react';
import PropTypes from 'proptypes';

RecipeDetailsIngredients.propTypes = {
  ingredient: PropTypes.string
};

function RecipeDetailsIngredients({ ingredient }) {

  
  return (
    <li><small>{ingredient}</small></li>
  );
}
export default RecipeDetailsIngredients;
