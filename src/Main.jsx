import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import SearchResults from './SearchResults.jsx';
import RecipeDetails from './RecipeDetails.jsx';
import NotFound from './error-pages/NotFound.jsx'

class Main extends Component {
  render() {
    return (

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/results' component={SearchResults}/>
        <Route path='/recipes/:id' component={RecipeDetails}/>

        {/* Handles 404s client-side */}
        <Route path="*" component={NotFound}/>
      </Switch>

    );
  }
}
export default Main;
