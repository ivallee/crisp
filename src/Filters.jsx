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
          const typeMatch = this.props.filters.findIndex(savedFilter => savedFilter && filter.type === savedFilter.type);
          if(filter.unique && typeMatch > -1) {
            this.refs[`Filter${typeMatch}`].focus();
          } else {
            // console.log(this.refs);
            filter.value = '';
            filter.exclude = false;
            this.props.addFilter(filter);
            if(this.refs.Filter0) this.refs.Filter0.focus();
          }
        });
    };
  }

  addFilterButton = (filter) => {
    const duplicate = this.props.filters.findIndex(savedFilter => savedFilter && filter.type === savedFilter.type && savedFilter.unique);
    const style = (duplicate > -1) ? 'btn btn-sm btn-secondary btn-filter' : 'btn btn-sm btn-main btn-filter';
    return <button className={style} key={filter.id} onClick={this.addFilter(filter.id)}>{filter.type}</button>;
  }

  render() {
    return (
      <div id="filter-div">
        <hr />
        <div className="d-flex justify-content-between">
          {this.state.filterTypes.map(this.addFilterButton)}
        </div>
        <ul className="list-group filter-list">
          {this.props.filters.map((filter, index) => {
            return filter && <Filter data={filter} key={index} index={index} update={this.props.updateFilter} remove={this.props.removeFilter} ref={`Filter${index}`} />;
          })}
        </ul>
      </div>
    );
  }
}
export default Filters;
