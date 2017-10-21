import React, { Component } from 'react';

class RecipeDetails extends Component {

  render() {
    return (
      <div className="jumbotron">
        <p className="lead">This is where recipe details should go! props.match.params.id is: {parseInt(this.props.match.params.id)} </p>
      </div>
    );
  }
}
export default RecipeDetails;

