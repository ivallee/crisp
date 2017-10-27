import React, { Component } from 'react';
import PropTypes from 'proptypes';

RecipeDetailsIngredients.propTypes = {
  ingredient: PropTypes.string
};

function RecipeDetailsIngredients({ ingredient }) {

  
  return (
    <li>{ingredient}</li>
  );
}
export default RecipeDetailsIngredients;
