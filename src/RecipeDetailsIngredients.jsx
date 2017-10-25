import React, { Component } from 'react';
import PropTypes from 'prop-types';

RecipeDetailsIngredients.propTypes = {
  ingredient: PropTypes.string
};

function RecipeDetailsIngredients({ ingredient }) {

  
  return (
    <li>{ingredient}</li>
  );
}
export default RecipeDetailsIngredients;
