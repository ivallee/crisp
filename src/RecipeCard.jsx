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
    axios.post(`http://localhost:3000/api/users/recipes/`, { recipe_id })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    return (
      <div className="recipe-card col">
        <div className="card">
          <div className="card-block">
            <Link to={`/recipes/${this.props.id}`} className="recipe-card-link">
              {/* <div className="row"> */}
              <img className="card-img-top" src={this.props.image} alt="Card image cap" />
              <div className="card-block">
                <h6 className="card-title">{this.props.title}</h6>
              </div>
              {/* </div> */}
              <div className="card-block">
                {/* <div className="col-sm-6">
                  <img className="img-thumbnail" src={this.props.image} alt="recipe thumbnail"></img>
                </div> */}
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
            </ Link>
            <div className="card-block d-flex justify-content-between">

              <button type="button" className="btn btn-danger" onClick={e => this.remove(e)}><i className="fa fa-times-circle-o" aria-hidden="true"></i></button>
              <button type="button" className="btn btn-success" onClick={() => this.saveRecipe(this.props.id)}><i className="fa fa-bookmark" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>


      // <div className="card recipe-card w-50">
      //   <img className="card-img-top" src={this.props.image} alt="Card image cap" />
      //   <div className="card-block">
      //     <h5 className="card-title">{this.props.title}</h5>
      //     <p className="card-text">
      //     <ul className="list-unstyled">
      //               <li>
      //                 <small>Time: {this.props.time}</small>
      //               </li>
      //               <li>
      //                 <small>From: {this.props.sourceName}</small>
      //               </li>
      //               <li>
      //                 <small>Servings: {this.props.servings}</small>
      //               </li>
      //             </ul>
      //       </p>
      //   </div>
      // <div className="card-block d-flex justify-content-between">

      //   <button type="button" className="btn btn-danger" onClick={e => this.remove(e)}><i className="fa fa-times-circle-o" aria-hidden="true"></i></button>
      //   <button type="button" className="btn btn-success" onClick={() => this.saveRecipe(this.props.id)}><i className="fa fa-bookmark-o" aria-hidden="true"></i></button>
      // </div>

      // </div>


    );
  }
}
export default RecipeCard;

