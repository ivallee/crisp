import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Filter from './Filter.jsx';
import { getFilterTypes, getFilter } from './api.js';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = { filterTypes: [] };
  }

  componentWillMount = () => {
    getFilterTypes()
      .then((filterTypes) => {
        this.setState({ filterTypes });
      });
  }

  static propTypes = {
    filters: PropTypes.array,
    addFilter: PropTypes.func,
    removeFilter: PropTypes.func,
    updateFilter: PropTypes.func
  }

  addFilter = (id) => {
    return () => {
      getFilter(id)
        .then((filter) => {
          filter.value = '';
          filter.exclude = false;
          this.props.addFilter(filter);
        });
    };
  }

  render() {
    return (
      <div id="filter-div">
        <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">
            {this.state.filterTypes.map(filter => <span className="col" key={filter.id} onClick={this.addFilter(filter.id)}>{filter.type}</span>)}
          </li>
          {
            this.props.filters.map((filter, index) => {
              return filter && <Filter data={filter} key={index} index={index} update={this.props.updateFilter} remove={this.props.removeFilter} />;
            })
          }
        </ul>
      </div>
    );
  }
}
export default Filters;
