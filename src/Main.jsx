import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Search from './Search.jsx';
import Results from './__Results.jsx';
import Recipe from './__Recipe.jsx';

class Main extends Component {
  render() {
    return (
      
      <Switch>
        <Route exact path='/' component={Search}/>
        <Route path='/results' component={Results}/>
        <Route path='/recipe/:id' component={Recipe}/>
      </Switch>

    );
    //React-Router switch to <SearchResults> or <RecipeDetails>
  }
}
export default Main;
