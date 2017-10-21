import React, { Component } from 'react';
import Search from './Search.jsx';

class Main extends Component {
  render() {
    return (
      <Search/>
    );
    //React-Router switch to <SearchResults> or <RecipeDetails>
  }
}
export default Main;
