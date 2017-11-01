import React, { Component } from 'react';
import Search from './Search.jsx';
import PropTypes from 'proptypes';

class Home extends Component {

  static propTypes = {
    sendQuery: PropTypes.func,
    savedFilters: PropTypes.array
  }

  render() {
    return (
      <div>
        <div className="jumbotron content-blocks">
          <h1 className="display-3 text-center">Welcome to Crisp</h1>
          <hr />
          <div className="welcome-text text-center">
            <p className="lead">Crisp is a recipe recommendation engine for people who are looking to try cooking more meatless and plant-based meals.</p>
            <p className="lead">To get started, enter some criteria and get your recommendations.</p>
            <p className="lead">Registered users can save their favourite recipes and recommendation filters</p>
          </div>
        </div>

        <Search sendQuery={this.props.sendQuery} savedFilters={this.props.savedFilters} />
      </div>
    );
  }
}
export default Home;

