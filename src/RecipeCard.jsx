import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { Link } from 'react-router-dom';
import { saveRecipe, deleteRecipe } from './api.js';

class RecipeCard extends Component {

  static propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    // image: PropTypes.image, FIX THIS PROPTYPE. Complains for PropTypes.image/PropTypes.img. Says it must be a function?
    recipes: PropTypes.array,
    removeRecipe: PropTypes.func,
    servings: PropTypes.number,
    saved: PropTypes.bool,
    sourceName: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.number,
    userUpdated: PropTypes.func
  }

  remove = (e) => {
    e.stopPropagation();
    this.props.removeRecipe(this.props.index);
  }

  saveButton = () => {
    if(this.props.saved) {
      return <button type="button" className="btn btn-success" onClick={() => deleteRecipe(this.props.id, this.props.userUpdated)}>Saved</button>;
    } else {
      return <button type="button" className="btn btn-success" onClick={() => saveRecipe(this.props.id, this.props.userUpdated)}>Save Recipe</button>;
    }
  }

  render() {
    console.log('Rendering card: ', this.props.saved);
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
                {this.saveButton()}
            </div>
          </div>
      </div>

    );
  }
}
export default RecipeCard;

