import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { login } from './api';
import propTypes from 'proptypes';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  static propTypes = {
    userUpdated: propTypes.func
  }

  handleLogin(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let password = this.refs.password.value;
    login(name, password, this.props.userUpdated).then((response) => {
      if (response.success) {
        console.log('successful login!');
        this.setState({
          isLoggedIn: true,
          redirect: true
        });
      }
      else {
        console.log('failed login!');
      }
    });
  }



  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/' />;
    }
    return (
    <div className="wrapper">
    <form className="form-signin" onSubmit={this.handleLogin.bind(this)}>       
      <h2 className="form-signin-heading">Please login</h2>
      <input type="text" className="form-control" name="username" ref="name" placeholder="Email Address" required="" autoFocus="" />
      <input type="password" className="form-control" name="password" ref="password" placeholder="Password" required=""/>      
      <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
    </form>
    </div>
    );
  }  
}
