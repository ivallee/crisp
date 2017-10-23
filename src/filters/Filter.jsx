import React, { Component } from 'react';
import PropTypes from 'proptypes';

class Filter extends Component {
  static propTypes = {
    data: PropTypes.object,
    index: PropTypes.number,
    remove: PropTypes.func,
    update: PropTypes.func
  }

  static displayNames = {
    'ingredient': 'Ingredients',
    'cuisine': 'Cuisine',
    'diet': 'Diet',
    'allergy': 'Allergy',
    'mealType': 'Meal Type'
  };

  static cuisineList = [
    { key: '', display: '' },
    { key: 'african', display: 'African' },
    { key: 'chinese', display: 'Chinese' },
    { key: 'korean', display: 'Korean' },
    { key: 'vietnamese', display: 'Vietnamese' },
    { key: 'thai', display: 'Thai' },
    { key: 'british', display: 'British' },
    { key: 'irish', display: 'Irish' },
    { key: 'french', display: 'French' },
    { key: 'italian', display: 'Italian' },
    { key: 'mexican', display: 'Mexican' },
    { key: 'spanish', display: 'Spanish' },
    { key: 'middle eastern', display: 'Middle Eastern' },
    { key: 'jewish', display: 'Jewish' },
    { key: 'american', display: 'American' },
    { key: 'cajun', display: 'Cajun' },
    { key: 'southern', display: 'Southern' },
    { key: 'greek', display: 'Greek' },
    { key: 'german', display: 'German' },
    { key: 'nordic', display: 'Nordic' },
    { key: 'eastern european', display: 'Eastern European' },
    { key: 'caribbean', display: 'Caribbean' },
    { key: 'latin american', display: 'Latin American' },
  ];

  static dietList = [
    { key: '', display: '' },
    { key: 'vegan', display: 'Vegan' },
    { key: 'lacto vegetarian', display: 'No Eggs' },
    { key: 'ovo vegetarian', display: 'No Dairy' },
  ];

  static allergyList = [
    { key: '', display: '' },
    { key: 'dairy', display: 'Dairy' },
    { key: 'egg', display: 'Egg' },
    { key: 'gluten', display: 'Gluten' },
    { key: 'peanut', display: 'Peanut' },
    { key: 'sesame', display: 'Sesame' },
    { key: 'seafood', display: 'Seafood' },
    { key: 'shellfish', display: 'Shellfish' },
    { key: 'soy', display: 'Soy' },
    { key: 'sulfite', display: 'Sulfite' },
    { key: 'tree nut', display: 'Tree Nut' },
    { key: 'wheat', display: 'Wheat' },
  ];

  static mealTypeList = [
    { key: '', display: '' },
    { key: 'main course', display: 'Main Course' },
    { key: 'side dish', display: 'Side Dish' },
    { key: 'dessert', display: 'Dessert' },
    { key: 'appetizer', display: 'Appetizer' },
    { key: 'salad', display: 'Salad' },
    { key: 'bread', display: 'Bread' },
    { key: 'breakfast', display: 'Breakfast' },
    { key: 'soup', display: 'Soup' },
    { key: 'beverage', display: 'Beverage' },
    { key: 'sauce', display: 'Sauce' },
    { key: 'drink', display: 'Drink' },
  ];

  remove = () => {
    this.props.remove(this.props.index);
  }

  update = (event) => {
    let newData = this.props.data;
    newData.value = event.target.value;
    this.props.update(newData, this.props.index);
  }

  buildInputs = () => {
    const commonProps = { className: 'form-control', value: this.props.data.value, onChange: this.update };

    switch(this.props.data.type) {
    case 'ingredient':
      return <div>

          <input type="text" {...commonProps} />
        </div>;
    case 'cuisine':
      return <select {...commonProps}>{Filter.cuisineList.map(cuisine => {
        return <option value={cuisine.key} key={cuisine.key}>{cuisine.display}</option>;
      })}</select>;
    case 'diet':
      return <select {...commonProps}>{Filter.dietList.map(diet => {
        return <option value={diet.key} key={diet.key}>{diet.display}</option>;
      })}</select>;
    case 'allergy':
      return <select {...commonProps}>{Filter.allergyList.map(allergy => {
        return <option value={allergy.key} key={allergy.key}>{allergy.display}</option>;
      })}</select>;
    case 'mealType':
      return <select {...commonProps}>{Filter.mealTypeList.map(mealType => {
        return <option value={mealType.key} key={mealType.key}>{mealType.display}</option>;
      })}</select>;
    }
  }

  render() {
    return (
      <li className="list-group-item">
        <button type="button" className="close" aria-label="Remove" onClick={this.remove}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="form-group row">
          <label htmlFor="example-text-input" className="col-2 col-form-label">{Filter.displayNames[this.props.data.type]}</label>
          <div className="col-10">
            {this.buildInputs()}
          </div>
        </div>
      </li>
    );
  }
}
export default Filter;

