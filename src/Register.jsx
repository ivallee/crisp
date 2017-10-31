import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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

  handleRegistration(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let password = this.refs.password.value;
    register(name, password, this.props.userUpdated).then((response) => {
      console.log(response);
      this.setState({
        redirect: true
      });
    });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/' />;
    }
    return (
      <form onSubmit={this.handleRegistration.bind(this)}>
        <h3>Sign up</h3>
        <input type="text" ref="name" placeholder="enter you username" />
        <input type="password" ref="password" placeholder="enter password" />
        <input type="submit" value="Register" />
      </form>
    );
  }
}

  //  <div className="wrapper">
  //   <form className="form-signin" onSubmit={this.handleLogin.bind(this)}>       
  //     <h2 className="form-signin-heading">Sign up</h2>
  //     <input type="text" className="form-control" name="username" ref="name" placeholder="Email Address" required="" autoFocus="" />
  //     <input type="password" className="form-control" name="password" ref="password" placeholder="Password" required=""/>      
  //     <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>   
  //   </form>
  //   </div>