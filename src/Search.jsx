import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import Filters from './Filters.jsx';
import filterData from './filter-data.js';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '', filters: [] };
  }



  doSearch = () => {
    let request = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${this.state.query}`;
    request += '&addRecipeInformation=true&limitLicense=true&instructionsRequired=true&number=8';

    for(const type in filterData) {
      let filterString = this.buildFilterString(type);
      if(filterData[type].excludeKey) {
        filterString += this.buildFilterString(type, true);
      }
      request += filterString;
    }

    this.props.sendQuery(request);
  }

  buildFilterString = (type, exclude = false) => {
    const filtersOfType = this.state.filters
      .filter(filter => filter && filter.type === type && filter.exclude === exclude)
      .map(filter => encodeURIComponent(filter.value));
    const key = exclude? filterData[type].excludeKey : filterData[type].key;
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
      <div>
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
