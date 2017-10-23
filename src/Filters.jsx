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
    this.props.addFilter({type: 'cuisine', value: ''});
  }

  render() {
    return (
      <div id="filter-div">
        <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
         Filter Menu
        </a>
        <div className="collapse" id="collapseExample">
          <p></p>
          <p className="list-group-item active" onClick={this.addFilter}>Add a filter</p>
          <p></p>
          <ul className="list-group">
            {
              this.props.filters.map((filter, index) => {
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
