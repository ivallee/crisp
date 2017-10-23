import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipeCard extends Component {

  render() {
    return (

      // Change link to be dynamic:
      <div className="recipe-card col-sm-6">
        <Link to='/recipes/1' className="recipe-card-link">
          <div className="card">
            <div className="card-block">
              <div className="row">
                <div className="col">
                  <h4 className="card-title">Recipe name</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <img className="img-thumbnail" src={'./docs/grilledcheese.jpg'} alt="Card image cap"></img>
                </div>
                <div className="col-sm-6">
                  <ul className="list-unstyled">
                    <li className="">
                      <small>Time: 60m</small>
                    </li>
                    <li className="">
                      <small>rating: 5</small>
                    </li>
                    <li className="">
                      <small>something else:</small>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="btn-group btn-group-sm" role="group">
                <button type="button" className="btn btn-secondary">No thanks</button>
                <button type="button" className="btn btn-danger">Never</button>
                <button type="button" className="btn btn-success">Try later</button>
              </div>
            </div>
          </div>
        </ Link>
      </div>

    );
  }
}
export default RecipeCard;

