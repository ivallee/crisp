import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import Filters from './Filters.jsx';
import PropTypes from 'proptypes';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '', filters: props.savedFilters };
  }

  static propTypes = {
    sendQuery: PropTypes.func,
    savedFilters: PropTypes.array
  }

  componentWillReceiveProps(props) {
    this.setState({ filters: props.savedFilters });
  }

  doSearch = () => {
    let request = this.state.query;

    axios.get('http://localhost:3000/api/filters')
      .then(({ data }) => {
        for(const filter of data) {
          let filterString = this.buildFilterString(filter.id, filter.key);
          if(filter.exclude_key) {
            filterString += this.buildFilterString(filter.id, filter.exclude_key, true);
          }
          request += filterString;
        }
        this.props.sendQuery(request);
      });
  }

  buildFilterString = (id, key, exclude = false) => {
    const filtersOfType = this.state.filters
      .filter(filter => filter && filter.id === id && filter.exclude === exclude)
      .map(filter => encodeURIComponent(filter.value));
    if(filtersOfType.length === 0) return '';
    return `&${key}=${filtersOfType.join('%2C+')}`;
  }

  setQuery = (query) => {
    this.setState({ query });
  }

  addFilter = (newFilter) => {
    let filters = this.state.filters;
    filters.unshift(newFilter);
    this.setState({ filters });
  }

  removeFilter = (filterID) => {
    let filters = this.state.filters;
    filters[filterID] = undefined;
    this.setState({ filters });
  }

  updateFilter = (filterID, newFilter) => {
    let filters = this.state.filters;
    filters[filterID] = newFilter;
    this.setState({ filters });
  }

  getFilterString = (type) => {
    const filterList = this.state.filters.filter((filter) => {
      return filter && filter.type === type;
    }).map(filter => filter.value);

    if(!filterList) return '';

    return filterList.join(', ');
  }

  render() {
    return (
      <div className='jumbotron content-blocks'>
        <h5>Add some filters or search for an item:</h5>
        <div className="row marketing">
          <div className="col">
            <SearchBar query={this.state.query} setQuery={this.setQuery} doSearch={this.doSearch} />
            <Filters filters={this.state.filters} addFilter={this.addFilter} removeFilter={this.removeFilter} updateFilter={this.updateFilter} />
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
