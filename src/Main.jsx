import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'proptypes';
import Home from './Home.jsx';
import SearchResults from './SearchResults.jsx';
import RecipeDetails from './RecipeDetails.jsx';
import NotFound from './error-pages/NotFound.jsx';
import { recipeSearch } from './api.js';
import Register from './Register.jsx';
import Login from './Login.jsx';
import UserPage from './UserPage.jsx';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResponse: []
    };
    this.shuffleResults = this.shuffleResults.bind(this);
  }

  static propTypes = {
    history: PropTypes.object,
    loggedIn: PropTypes.bool,
    username: PropTypes.string,
    savedRecipes: PropTypes.array
  }

  shuffleResults = (a) => {
    for(let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  }

  sendQuery = (query) => {
    recipeSearch(query)
      .then(searchResponse => {
        this.shuffleResults(searchResponse);
        this.setState({ searchResponse });
        this.props.history.push('/results');
      });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home sendQuery={this.sendQuery} {...this.props} />} />
        <Route exact path='/results' render={() => <SearchResults searchResponse={this.state.searchResponse} {...this.props} />} />
        <Route path='/recipes/:id' render={(route) => <RecipeDetails searchResponse={this.state.searchResponse} {...this.props} id={route.match.params.id}/>} />
        <Route path='/register' render={() => <Register {...this.props} />} />
        <Route path='/login' render={() => <Login {...this.props} />} />
        <Route path='/users' render={() => <UserPage {...this.props} />} />

        {/* Handles 404s client-side */}
        {<Route path="*" component={NotFound} />}
      </Switch>
    );
  }
}
export default withRouter(Main);


