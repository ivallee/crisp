import React, { Component } from 'react';
import PropTypes from 'proptypes';

class Recipe extends Component {

  render() {
    return (
      <div className="jumbotron">
        <p className="lead">This is where recipe details should go! props.match.params.id is: {parseInt(this.props.match.params.id)} </p>
      </div>
    );
  }
}
export default Recipe;

