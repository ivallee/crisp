import React from 'react';
import PropTypes from 'proptypes';
import { categorizeRecipe } from './api.js';


const CategorySelector = ({ id, category, categoryList, userUpdated }) => {
  const setCategory = (categoryToSet) => {
    categorizeRecipe(id, categoryToSet, userUpdated);
  };
  return (
    <div>
      <button className="btn btn-category btn-sm dropdown-toggle" type="button" data-toggle="dropdown">{category || 'Categorize'}</button>
      <div className="dropdown-menu">
        <small className="dropdown-item" key={-1} onClick={(() => setCategory(''))}>Uncategorized</small>
        {categoryList.map((category, index) => <small className="dropdown-item" key={index} onClick={(() => setCategory(category.name))}>{category.name}</small>)}
      </div>
    </div>
  );
};

CategorySelector.propTypes = {
  category: PropTypes.string,
  categoryList: PropTypes.array,
  id: PropTypes.number,
  userUpdated: PropTypes.func
};

export default CategorySelector;