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
          const typeMatch = this.props.filters.findIndex(savedFilter => filter.type === savedFilter.type);
          if(filter.unique && typeMatch > -1) {
            this.refs[`Filter${typeMatch}`].focus();
          } else {
            filter.value = '';
            filter.exclude = false;
            this.props.addFilter(filter);
            this.refs.Filter0.focus();
          }
        });
    };
  }

  render() {
    return (
      <div id="filter-div">

        <hr />
        <div className="d-flex justify-content-between">
          {this.state.filterTypes.map(filter => <button className="btn btn-sm btn-main btn-filter" key={filter.id} onClick={this.addFilter(filter.id)}>{filter.type}</button>)}
        </div>
        <ul className="list-group">
          {this.props.filters.map((filter, index) => {
            return filter && <Filter data={filter} key={index} index={index} update={this.props.updateFilter} remove={this.props.removeFilter} ref={`Filter${index}`} />;
          })}
        </ul>
      </div>
    );
  }
}
export default Filters;
