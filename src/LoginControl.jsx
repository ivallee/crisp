import React from 'react';
import axios from 'axios';
import { login, logout } from './api.js';

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    login('test', 'test').then((response) => {
      if(response.success) {
        console.log('successful login!');
        this.setState({ isLoggedIn: true });
      }
      else {
        console.log('failed login!');
      }
    });
  }

  handleLogoutClick() {
    logout().then(() => {
      console.log('logout');
      this.setState({ isLoggedIn: false });
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting() {
  return <p>Welcome back!</p>;
}

function GuestGreeting() {
  return <p>Please sign up.</p>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}