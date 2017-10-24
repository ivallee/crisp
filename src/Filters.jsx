import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Filter from './Filter.jsx';
import filterData from './filter-data.js';

class Filters extends Component {

  static propTypes = {
    filters: PropTypes.array,
    addFilter: PropTypes.func,
    removeFilter: PropTypes.func,
    updateFilter: PropTypes.func
  }

  addFilter = (type) => {
    return () => {
      this.props.addFilter({type, value: '', exclude: false});
    };
  }

  render() {
    return (
      <div id="filter-div">
        <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
         Filter Menu
        </a>
        <div className="collapse" id="collapseExample">
          <ul className="list-group">
          <li className="list-group-item active">
            {Object.keys(filterData).map(filterName => <span className="col" key={filterName} onClick={this.addFilter(filterName)}>{filterName}</span> )}
          </li>
          {
            this.props.filters.reverse().map((filter, index) => {
              return filter && <Filter data={filter} key={index} index={index} update={this.props.updateFilter} remove={this.props.removeFilter}/>;
            })
          }
        </ul>
        </div>
      </div>
    );
  }
}
export default Filters;
