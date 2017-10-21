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
    'allergy': 'Allergy'
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
      return <input type="text" {...commonProps} />;
    case 'cuisine':
      return <select {...commonProps}>{Filter.cuisineList.map(cuisine => {
        return <option value={cuisine.key} key={cuisine.key}>{cuisine.display}</option>;
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

