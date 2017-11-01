import React, { Component } from 'react';
import { login } from './api';
import propTypes from 'proptypes';

export default class Login extends Component {
  static propTypes = {
    userUpdated: propTypes.func
  }

  handleLogin = (e) => {
    e.preventDefault();
    let name = this.refs.name.value;
    let password = this.refs.password.value;
    login(name, password, this.props.userUpdated).then((response) => {
      if(response.success) {
        this.setState({ isLoggedIn: true });
      }
    });
  }

  render() {
    return (
      <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModal2" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="wrapper">
                <form className="form-signin" onSubmit={this.handleLogin.bind(this)}>
                  <h2 className="form-signin-heading">Please login</h2>
                  <input type="text" className="form-control" name="username" ref="name" placeholder="Email Address" />
                  <input type="password" className="form-control" name="password" ref="password" placeholder="Password" />
                  <button className="btn btn-main btn-block" type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}