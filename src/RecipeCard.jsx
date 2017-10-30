import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { Link } from 'react-router-dom';
import { saveRecipe, deleteRecipe, getRecipeDetails } from './api.js';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.setStateFromProps(this.props);
  }

  static propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    image: PropTypes.string,
    recipes: PropTypes.array,
    removeRecipe: PropTypes.func,
    servings: PropTypes.number,
    saved: PropTypes.bool,
    sourceName: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.number,
    userUpdated: PropTypes.func
  }

  componentDidMount() {
    if(!this.state.title) this.setStateFromAPI();
  }

  componentWillReceiveProps(props) {
    this.setStateFromProps(props);
  }

  setStateFromProps = (props) => {
    const { image, recipes, servings, sourceName, title, time } = props;
    this.state = { image, recipes, servings, sourceName, title, time };
  }

  setStateFromAPI = () => {
    getRecipeDetails(this.props.id).then(response => {
      const { image, recipes, servings, sourceName, title, time } = response;
      this.setState({ image, recipes, servings, sourceName, title, time });
    });
  }

  remove = (e) => {
    e.stopPropagation();
    this.props.removeRecipe(this.props.index);
  }

  saveButton = () => {
    if(this.props.saved) {
      return <button type="button" className="btn btn-success" onClick={() => deleteRecipe(this.props.id, this.props.userUpdated)}><i className="fa fa-times-circle-o" aria-hidden="true"></i></button>;
    } else {
      return <button type="button" className="btn btn-success" onClick={() => saveRecipe(this.props.id, this.props.userUpdated)}><i className="fa fa-bookmark" aria-hidden="true"></i></button>;
    }
  }

  render() {
    return (
      <div className="recipe-card col">
        <div className="card">
          <div className="card-block">
            <Link to={`/recipes/${this.props.id}`} className="recipe-card-link">
              {/* <div className="row"> */}
              <img className="card-img-top" src={this.state.image} alt="Card image cap" />
              <div className="card-block">
                <h6 className="card-title">{this.state.title}</h6>
              </div>
              {/* </div> */}
              <div className="card-block">
                {/* <div className="col-sm-6">
                  <img className="img-thumbnail" src={this.state.image} alt="recipe thumbnail"></img>
                </div> */}
                  <ul className="list-unstyled">
                    <li>
                      <small>Time: {this.state.time}</small>
                    </li>
                    <li>
                      <small>From: {this.state.sourceName}</small>
                    </li>
                    <li>
                      <small>Servings: {this.state.servings}</small>
                    </li>
                  </ul>
                </div>
            </ Link>
            <div className="card-block d-flex justify-content-between">
              <button type="button" className="btn btn-danger" onClick={e => this.remove(e)}><i className="fa fa-times-circle-o" aria-hidden="true"></i></button>
              {this.saveButton()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeCard;

