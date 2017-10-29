import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Filter from './Filter.jsx';
import axios from 'axios';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = { filterTypes: [] };
  }

  componentWillMount = () => {
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

  addFilter = (id) => {
    return () => {
      axios.get(`http://localhost:8080/filters/${id}`)
        .then(({ data }) => {
          data.value = '';
          data.exclude = false;
          this.props.addFilter(data);
        });
    };
  }

  render() {
    return (
      <div id="filter-div">


        <div className="d-flex justify-content-between">
          {this.state.filterTypes.map(filter => <button className="btn btn-sm filter-btn" key={filter.id} onClick={this.addFilter(filter.id)}>{filter.type}</button>)}
        </div>
        <ul className="list-group">
          {/* <li className="list-group-item d-flex justify-content-between">
            {this.state.filterTypes.map(filter => <span className="col" key={filter.id} onClick={this.addFilter(filter.id)}>{filter.type}</span>)}
          </li> */}
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
