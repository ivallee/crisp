import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RecipeCard extends Component {

  static propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    // image: PropTypes.image, FIX THIS PROPTYPE. Complains for PropTypes.image/PropTypes.img. Says it must be a function?
    recipes: PropTypes.array,
    removeRecipe: PropTypes.func,
    servings: PropTypes.number,
    sourceName: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.number
  }

  remove = (e) => {
    e.stopPropagation();
    this.props.removeRecipe(this.props.index);
  }

  saveRecipe = (recipe_id) => {
    console.log('saving recipe_id', recipe_id);
    axios.post(`http://localhost:3000/api/users/recipes/`, {recipe_id})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

  render() {
    return (
      <div className="recipe-card col-sm-6">
          <div className="card">
            <div className="card-block">
              <Link to={`/recipes/${this.props.id}`} className="recipe-card-link">
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
                    <li>
                      <small>Time: {this.props.time}</small>
                    </li>
                    <li>
                      <small>From: {this.props.sourceName}</small>
                    </li>
                    <li>
                      <small>Servings: {this.props.servings}</small>
                    </li>
                  </ul>
                </div>
              </div>
              </ Link>
              <div className="btn-group btn-group-sm" role="group">
              <button type="button" className="close" aria-label="Remove" onClick={e => this.remove(e)}>
                {/* <span aria-hidden="true">&times;</span> */}
              </button>
                <button type="button" className="btn btn-danger" onClick={e => this.remove(e)}>Show another one</button>
              </div>
                <button type="button" className="btn btn-success" onClick={() => this.saveRecipe(this.props.id)}>Save Recipe</button>
            </div>
          </div>
      </div>

    );
  }
}
export default RecipeCard;

