import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { Link } from 'react-router-dom';

class RecipeCard extends Component {

  static propTypes = {
    recipes: PropTypes.array
  }

  render() {
    console.log('Recipe Card:', this.props.title);
    return (
      // Change link to be dynamic:
      <div className="recipe-card col-sm-6">
        <Link to='/recipes/1' className="recipe-card-link">
          <div className="card">
            <div className="card-block">
              <div className="row">
                <div className="col">
                  <h4 className="card-title">{this.props.title}</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <img className="img-thumbnail" src={this.props.image} alt="recipe thumbnail"></img>
                </div>
                <div className="col-sm-6">
                  <ul className="list-unstyled">
                    <li className="">
                      <small>Time: {this.props.time}</small>
                    </li>
                    <li className="">
                      <small>rating: 5</small>
                    </li>
                    <li className="">
                      <small>Servings: {this.props.servings}</small>
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

