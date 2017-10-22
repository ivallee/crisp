import React, { Component } from 'react';

class RecipeDetails extends Component {

  render() {
    return (
      <div>
        <div className="jumbotron">
          <p className="lead">This is where recipe details should go! props.match.params.id is: {parseInt(this.props.match.params.id)} </p>
        </div>
        <div className="row">
        <div className="col-sm-6">
        <img className="img-thumbnail" src={'./docs/grilledcheese.jpg'} alt="Card image cap"></img>
      </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h5>Toasty Toast </h5>
          </div>
          <div>
            <a className="nav-link" href="#">Back to Search</a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            Time: 30 minutes
          </div>
          <a className="btn btn-primary" href="#" role="button">Ingredients</a>
          <button className="btn btn-secondary col-sm-2" type="submit">Instructions</button>
          <input className="btn btn-info col-sm-2" type="button" value="Nutrition"></input>
          <input className="btn btn-success col-sm-2" type="submit" value="Save"></input>
          <input className="btn btn-danger col-sm-2" type="reset" value="Banish"></input>
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

