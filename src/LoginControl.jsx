import React from 'react';
import { login, logout } from './api.js';

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    login('test', 'test', this.props.userUpdated).then((response) => {
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
    logout(this.props.userUpdated).then(() => {
      console.log('logout');
      this.setState({ isLoggedIn: false });
    });
  }

  render() {
    const { loggedIn } = this.props;

    let button = null;
    if(loggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting loggedIn={loggedIn} />
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

function Greeting(loggedIn) {
  if(loggedIn) {
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