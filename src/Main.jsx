import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home.jsx';
import SearchResults from './SearchResults.jsx';
import RecipeDetails from './RecipeDetails.jsx';
import NotFound from './error-pages/NotFound.jsx';
import dummyResults from './dummyresults.js';




class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      searchResponse: [] 
    };
  }

  
  
  
  sendQuery = (query) => {

    console.log("query", query);

    let searchResponse = dummyResults.results;

    this.setState({ searchResponse });
    
    this.props.history.push('/results');

    
  }
  
  render() {
    console.log(this.state);
    return (
      <Switch>
        {/* <Route exact path='/' component={Home}/> */}
        <Route exact path="/" render={()=><Home sendQuery={this.sendQuery}/>}/>
        <Route exact path='/results' render={()=><SearchResults searchResponse={this.state.searchResponse}/>}/>        
        <Route path='/recipes/:id' component={RecipeDetails}/>

        {/* Handles 404s client-side */}
        {<Route path="*" component={NotFound}/>}
      </Switch>

    );
  }
}
export default withRouter(Main);


