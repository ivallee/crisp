import React, { Component } from 'react';
import PropTypes from 'proptypes';

class SearchBar extends Component {
  static propTypes = {
    query: PropTypes.string,
    setQuery: PropTypes.func,
    doSearch: PropTypes.func
  }

  handleQueryChange = (event) => {
    this.props.setQuery(event.target.value);
  }

  handleSearchButton = (event) => {
    event.preventDefault();
    this.props.doSearch();
  }

  render() {
    return (
      <div className="form-group">
        <input className="form-control"
          type="text"
          placeholder="What would you like?"
          value={this.props.query}
          onChange={this.handleQueryChange} />
        <input className="btn btn-lg btn-success"
          id="search-button"
          type="button"
          value="Search"
          onClick={this.handleSearchButton} />
      </div>
    );
  }
}
export default SearchBar;

