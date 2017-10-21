import React, { Component } from 'react';
import PropTypes from 'proptypes';


class Filters extends Component {
  constructor(props) {
    super(props);
    this.props.addFilter({type: 'Dinner'});
    this.props.addFilter({type: 'Vegan'});
    this.props.addFilter({type: 'Fast'});
  }

  static propTypes = {
    filters: PropTypes.object,
    addFilter: PropTypes.func,
    removeFilter: PropTypes.func,
    updateFilter: PropTypes.func
  }

  render() {
    return (
      <div>
        <h4>Filters</h4>
        <ul className="list-group">
          <li className="list-group-item">Dinner</li>
          <li className="list-group-item">Vegan</li>
          <li className="list-group-item">Fast</li>
          <li className="list-group-item active">Add a filter</li>
        </ul>
      </div>
    );
  }
}
export default Filters;
