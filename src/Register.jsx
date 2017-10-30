import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';
import register from './api';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        password: '',
        // redirect: false,
      }
    };
  }


  newUser = () => {
    const { name, password } = this.state.data;
    register(name, password).then((response) => {
      console.log(response);
    });
  }

  onUserChanged = event => {
    this.state.data.name = event.target.value;
  }

  onPasswordChanged = event => {
    this.state.data.password = event.target.value;
  }

  onSubmit = event => {
    event.preventDefault();
    this.newUser(this.state.data);
  }

  render() {
    return (
    <form id="Register">
        <h1>Log In</h1>
        <fieldset id="inputs">
            <input id="name"
                    type="email"
                    placeholder="Username"
                    onChange={this.onUserChanged}/>
            <input id="password"
                   type="password"
                   placeholder="Password"
                   onChange={this.onPasswordChanged}/>
        </fieldset>
        <fieldset id="actions">
            <input type="submit" id="submit" onClick={this.onSubmit} value="Log in"/>
        </fieldset>
    </form>
    );
  }
}
