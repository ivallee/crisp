import React, { Component } from 'react';
import Search from './Search.jsx';
import PropTypes from 'proptypes';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="jumbotron content-blocks">
          <h5 className="display-4">Welcome to Crisp</h5>
          <p className="lead">Crisp is a recipe recommendation engine for people who are looking to try cooking more meatless and plant-based meals.</p>
          <p className="lead">To get started, enter some criteria and get your reccomendations.</p>
          <p className="lead">Registered users can save their favourite recipes!</p>
        </div>

        <Search sendQuery={this.props.sendQuery} savedFilters={this.props.savedFilters}/>
      </div>



    );
  }
}
export default Home;

