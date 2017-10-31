import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';
import { register } from './api';
import propTypes from 'proptypes';

export default class Register extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    userUpdated: propTypes.func
  }

  handleRegistration(e) {
    e.preventDefault()
    let name = this.refs.name.value
    let password = this.refs.password.value
    register(name, password, this.props.userUpdated).then((response) => {
      console.log(response);
    });
  }
  
  render() {
    return (
      <form onSubmit={this.handleRegistration.bind(this)}>
        <h3>Register</h3>
        <input type="text" ref="name" placeholder="enter you username" />
        <input type="password" ref="password" placeholder="enter password" />
        <input type="submit" value="Register" />
      </form>
    );
  }

}
