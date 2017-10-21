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

  addFilter = () => {
    this.props.addFilter({type: 'Placeholder', value: ''});
  }

  render() {
    return (
      <div>
        <h4>Filters</h4>
        <ul className="list-group">
          {
            this.props.filters.map((filter, index) => {
              return filter && <Filter data={filter} key={index} index={index} update={this.props.updateFilter} remove={this.props.removeFilter}/>;
            })
          }
          <li className="list-group-item active" onClick={this.addFilter}>Add a filter</li>
        </ul>
      </div>
    );
  }
}
export default Filters;
