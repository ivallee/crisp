import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import SearchResults from './SearchResults.jsx';
import RecipeDetails from './RecipeDetails.jsx';
import NotFound from './error-pages/NotFound.jsx';
import dummyResults from './dummyresults.js';




class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [] 
    };
  }

  
  
  
  sendQuery = (query) => {

    console.log("query", query);

    let searchResults = dummyResults.results;

    this.setState({ searchResults });

    
  }
  
  render() {
    // console.log(dummyResults.results[0])
    return (

      <Switch>
        {/* <Route exact path='/' component={Home}/> */}
        <Route exact path="/" render={()=><Home sendQuery={this.sendQuery}/>}/>
        <Route exact path='/results' component={SearchResults}/>
        <Route path='/recipes/:id' component={RecipeDetails}/>

        {/* Handles 404s client-side */}
        {<Route path="*" component={NotFound}/>}
      </Switch>

    );
  }
}
export default Main;
