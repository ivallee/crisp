import React, { Component } from 'react';
import PropTypes from 'proptypes';


class Filters extends Component {

  static propTypes = {
    filters: PropTypes.object,
    addFilter: PropTypes.func,
    removeFilter: PropTypes.func,
    updateFilter: PropTypes.func
  }

  addFilter = () => {
    this.props.addFilter({type: 'Placeholder'});
  }

  render() {
    return (
      <div>
        <h4>Filters</h4>
        <ul className="list-group">
          {
            this.props.filters.list.map((filter, index) => {
              return <li className="list-group-item" key={index}>{filter.type}</li>;
            })
          }
          <li className="list-group-item active" onClick={this.addFilter}>Add a filter</li>
        </ul>
      </div>
    );
  }
}
export default Filters;
