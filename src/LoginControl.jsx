import React from 'react';
import axios from 'axios';

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    axios.post('http://localhost:3000/api/users/login', {
      name: 'test',
      password: 'test',
      withCredentials: true
    })
      .then((response) => {
        console.log(response);
        if(response.data.success) {
          this.setState({ isLoggedIn: true });
        }
        else {
          console.log('failed login!');
        }
      })
      // .then(() => this.setState({ redirect: true }))
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        axios.get('http://localhost:3000/api/users/jeremy');
      });
  }

  handleLogoutClick() {
    axios.post('http://localhost:3000/api/users/logout', {withCredentials: true})
      .then((response) => {
        console.log(response);
        this.setState({ isLoggedIn: false });
      })
      // .then(() => this.setState({ redirect: true }))
      .catch((error) => {
        console.log(error);
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