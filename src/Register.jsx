import React, { Component } from 'react';
import { register } from './api';
import propTypes from 'proptypes';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  static propTypes = {
    userUpdated: propTypes.func,
  }

  handleRegistration = (e) => {
    e.preventDefault();
    let name = this.refs.name.value;
    let password = this.refs.password.value;
    register(name, password, this.props.userUpdated).then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="wrapper">
                <form className="form-signin" onSubmit={this.handleRegistration.bind(this)}>
                  <h2 className="form-signin-heading">Sign up</h2>
                  <input type="email" className="form-control" name="username" ref="name" placeholder="Email Address" />
                  <input type="password" className="form-control" name="password" ref="password" placeholder="Password" />
                  <button className="btn btn-main btn-block" type="submit">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
