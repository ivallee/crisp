import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import Filters from './Filters.jsx';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '', filters: { nextID: 0 } };
  }

  doSearch = () => {
    console.log(`Searching for ${this.state.query}`);
    console.log(JSON.stringify(this.state.filters));
  }

  setQuery = (query) => {
    this.setState({ query });
  }

  addFilter = (newFilter) => {
    let filters = this.state.filters;
    filters[filters.nextID] = newFilter;
    filters.nextID += 1;
    this.setState({filters});
  }

  removeFilter = (filterID) => {
    let filters = this.state.filters;
    delete filters[filterID];
    this.setState({filters});
  }

  updateFilter = (filterID, newFilter) => {
    let filters = this.state.filters;
    filters[filterID] = newFilter;
    this.setState({filters});
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h3 className="display-3">Gronsak</h3>
          <p className="lead">PLant-based cooking blah blah blah Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus
            ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p>
            <a className="btn btn-lg btn-success" href="#" role="button">Get started</a>
          </p>
        </div>

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
