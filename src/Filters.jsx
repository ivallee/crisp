import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Filter from './filters/Filter.jsx';


class Filters extends Component {

  static propTypes = {
    filters: PropTypes.array,
    addFilter: PropTypes.func,
    removeFilter: PropTypes.func,
    updateFilter: PropTypes.func
  }

  addFilter = (type) => {
    return () => {
      this.props.addFilter({type, value: ''});
    };
  }

  render() {
    return (
      <div id="filter-div">
        <h4>Filters</h4>
        <button className="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Your Filters</button>
        <button type="button" className="btn btn-info">Reset filters</button>
        <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <ul className="list-group">
                {
                  this.props.filters.map((filter, index) => {
                    return filter && <Filter data={filter} key={index} index={index} update={this.props.updateFilter} remove={this.props.removeFilter}/>;
                  })
                }
                <li className="list-group-item active">
                  <span className="col" onClick={this.addFilter('ingredient')}>Ingredient</span>
                  <span className="col" onClick={this.addFilter('cuisine')}>Cuisine</span>
                  <span className="col" onClick={this.addFilter('diet')}>Diet</span>
                  <span className="col" onClick={this.addFilter('allergy')}>Allergy</span>
                  <span className="col" onClick={this.addFilter('mealType')}>Meal Type</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Filters;

