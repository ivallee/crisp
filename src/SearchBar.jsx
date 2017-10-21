import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Hungry?</label>
        <input type="text" className="form-control" placeholder="What would you like?" />
      </div>
    );
  }
}
export default SearchBar;

