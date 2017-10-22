import React, { Component } from 'react';

class RecipeDetails extends Component {

  render() {
    return (
      <div>
        {/* <div className="jumbotron">
          <p className="lead">This is where recipe details should go! props.match.params.id is: {parseInt(this.props.match.params.id)} </p>
        </div> */}
        <div className="row">
          <div className="col-sm-6">
            <img className="img-thumbnail" src={'./docs/grilledcheese.jpg'} alt="Card image cap"></img>
         </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
          <h4>
            Toasty Toast
            <small className="text-muted"> Time required: 30 minutes</small>
          </h4>    
          </div>
        </div>
        <div className="row">
          <a className="nav-link" href="#">Back to Search</a>
        </div>
        <div className="row" id='toolbar'>
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">Ingredients</button>
            <button type="button" className="btn btn-secondary">Instructions</button>
            <button type="button" className="btn btn-info">Save</button>
            <button type="button" className="btn btn-danger">Banish</button>
          </div>
        </div>
        <div>
          <h5>Ingredients:</h5>
          <ul>
            <li>Basil</li>
            <li>Tomato</li>
            <li>Cheese</li>
            <li>White Bread</li>
            <li>Butter</li>
          </ul>
        </div>
        <div>
          <h5>Instructions:</h5>
          <ul>
            <li>Turn on oven and set to 350F</li>
            <li>Slice tomato</li>
            <li>Slice cheese</li>
            <li>Butter your bread and cover in cheese</li>
            <li>Bake for 5 minutes? </li>
            <li>Remove from oven and add tomato and basil</li>
            <li>Consume</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default RecipeDetails;

