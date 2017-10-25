import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Filter from './Filter.jsx';
import axios from 'axios';

class Filters extends Component {

  componentWillMount = () => {
    this.setState({ filterTypes: [] });
    axios.get('http://localhost:8080/filters')
      .then(({ data }) => {
        this.setState({ filterTypes: data });
      });
  }

  static propTypes = {
    filters: PropTypes.array,
    addFilter: PropTypes.func,
    removeFilter: PropTypes.func,
    updateFilter: PropTypes.func
  }

  addFilter = (type) => {
    return () => {
      this.props.addFilter({ type, value: '', exclude: false });
    };
  }

  render() {
    return (
      <div id="filter-div">
        <ul className="list-group">
          <li className="list-group-item active">
            {this.state.filterTypes.map(filter => <span className="col" key={filter.id} onClick={this.addFilter(filter.type)}>{filter.type}</span>)}
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
