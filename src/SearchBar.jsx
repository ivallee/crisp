import React, { Component } from 'react';
import PropTypes from 'proptypes';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  static propTypes = {
    doSearch: PropTypes.func
  }

  handleQueryChange = (event) => {
    this.setState({ query: event.target.value });
  }

  search = () => {
    this.props.doSearch(this.state.query);
  }

  render() {
    return (
      <div className="form-group">
        <input className="form-control"
          type="text"
          placeholder="What would you like?"
          value={this.state.query}
          onChange={this.handleQueryChange} />
        <input className="btn btn-lg btn-success"
          type="button"
          value="Search"
          onClick={this.search} />
      </div>
    );
  }
}
export default SearchBar;

