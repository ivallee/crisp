import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './__Home.jsx'
import SearchResults from './__SearchResults.jsx';
import RecipeDetails from './__RecipeDetails.jsx';

class Main extends Component {
  render() {
    return (
      
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/results' component={SearchResults}/>
        <Route path='/recipe/:id' component={RecipeDetails}/>
      </Switch>

    );
  }
}
export default Main;
