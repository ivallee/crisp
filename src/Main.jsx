import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'proptypes';
import Home from './Home.jsx';
import SearchResults from './SearchResults.jsx';
import RecipeDetails from './RecipeDetails.jsx';
import NotFound from './error-pages/NotFound.jsx';
import axios from 'axios';
// delete this when fetch to api is functional
import dummyResults from './_dummyresults.js';




class Main extends Component {



  constructor(props) {
    super(props);
    this.state = { 
      searchResponse: [] 
    };
  }

  
  
  
  sendQuery = (query) => {

    // REAL API CALL FUNCTION
    axios.get(`http://localhost:8080/recipes/search/${query}`)
    .then(response => {
      console.log(response.data);
      const searchResponse = response.data.results;
      this.setState( { searchResponse} );
      this.props.history.push('/results');
    });

    // FOR DUMMY DATA - DELETE LATER
    // let searchResponse = dummyResults.results;
    // this.setState({ searchResponse });
    // this.props.history.push('/results');

  }
  
  render() {
    return (
      <Switch>
        {/* <Route exact path='/' component={Home}/> */}
        <Route exact path="/" render={()=><Home sendQuery={this.sendQuery}/>}/>
        <Route exact path='/results' render={()=><SearchResults searchResponse={this.state.searchResponse}/>}/>        
        {/* <Route path='/recipes/:id' render={()=><RecipeDetails searchResponse={this.state.searchResponse}/>}/> */}
        <Route path='/recipes/:id' component={RecipeDetails}/>

        {/* Handles 404s client-side */}
        {<Route path="*" component={NotFound}/>}
      </Switch>

    );
  }
}
export default withRouter(Main);


