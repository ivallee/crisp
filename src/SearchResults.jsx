import React, { Component } from 'react';
import Search from './Search.jsx';
import PropTypes from 'proptypes';

class SearchResults extends Component {

  render() {
    return (
      <div>
        <div className="jumbotron">
          <p className="lead">This is where results should go!</p>
        </div>

        <Search />

        <div className="jumbotron">
          <h3 className="display-3">Results</h3>
          <p className="lead">Here are some recipes based on your search criteria.</p>
          <p>
          </p>
        </div>
        <div className="row marketing">
        <div className="col">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Start a new search</label>
            <input type="text" className="form-control" placeholder="What would you like?"></input>
          </div>
          <button className="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Your Filters</button>
          <button type="button" className="btn btn-info">Reset filters</button>
          <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <ul className="list-group">
                  <li className="list-group-item active">Add a filter</li>
                  <li className="list-group-item">
                    <div className="form-group row">
                      <label htmlFor="example-text-input" className="col-2 col-form-label">Dinner</label>
                      <div className="col-10">
                        <input className="form-control" type="text" value="Artisanal kale" id="example-text-input"></input>
                      </div>
                    </div>  
                  </li>
                  <li className="list-group-item">Vegan</li>
                  <li className="list-group-item">Fast</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
      <div className="col-sm-6">
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
      </div>
    </div>


    </div>
    );
  }
}
export default SearchResults;

