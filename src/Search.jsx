import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import Filters from './Filters.jsx';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '', filters: [] };
  }

  doSearch = () => {
    let request = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${this.state.query}`;
    request += '&limitLicense=true&instructionsRequired=true&number=8';

    const cuisineFilters = this.getFilterString('cuisine');
    request += cuisineFilters && `&cuisine=${cuisineFilters}`;

    //TODO: diet filter should be unique
    const dietFilters = this.getFilterString('diet');
    request += dietFilters && `&diet=${dietFilters}`;

    const allergyFilters = this.getFilterString('allergy');
    request += allergyFilters && `&intolerances=${allergyFilters}`;

    //TODO: mealType filter should be unique
    const mealTypeFilters = this.getFilterString('mealType');
    request += mealTypeFilters && `&type=${mealTypeFilters}`;

    console.log(encodeURI(request));
  }

  setQuery = (query) => {
    this.setState({ query });
  }

  addFilter = (newFilter) => {
    let filters = this.state.filters;
    filters.push(newFilter);
    this.setState({filters});
  }

  removeFilter = (filterID) => {
    let filters = this.state.filters;
    filters[filterID] = undefined;
    this.setState({filters});
  }

  updateFilter = (filterID, newFilter) => {
    let filters = this.state.filters;
    filters[filterID] = newFilter;
    this.setState({filters});
  }

  getFilterString = (type) => {
    const filterList =  this.state.filters.filter((filter) => {
      return filter.type === type;
    }).map(filter => filter.value);

    if(!filterList) return '';

    return filterList.join(', ');
  }

  render() {
    return (
      <div>
        {/* <div className="jumbotron">
          <h3 className="display-3">Gronsak</h3>
          <p className="lead">PLant-based cooking blah blah blah Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus
            ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p>
            <a className="btn btn-lg btn-success" href="#" role="button">Get started</a>
          </p>
        </div> */}

        <div className="row marketing">
          <div className="col">
            <SearchBar query={this.state.query} setQuery= {this.setQuery} doSearch={this.doSearch}/>
            <Filters filters={this.state.filters} addFilter={this.addFilter} removeFilter={this.removeFilter} updateFilter={this.updateFilter}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
