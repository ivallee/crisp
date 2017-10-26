import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      data: {
        name: '',
        password: '',
        redirect: false,
      }
    };
  }
  
  
  newUser = (data) => {
    console.log(this.state.data);
    
    axios.post('http://localhost:8080/users/new', {
      name: this.state.data.name,
      password: this.state.data.password
    })
    .then(function (response) {
      console.log(response);
    })
    .then(() => this.setState({ redirect: true }))
    .catch(function (error) {
      console.log(error);
    });
  }

  onUser = (event) => {
    this.setState({
      name: event.target.value,
    });
  }
  
  onUserChanged = event => {
    this.setState({ name: event.target.value});
  }
  
  onPasswordChanged = event => {
    this.setState({ password: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    this.newUser(this.state);
  }
  
  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/'/>;
    }
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

