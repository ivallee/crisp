import React from 'react';
import { login, logout } from './api.js';
import { NavLink } from 'react-router-dom';

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    login('test', 'test', this.props.userUpdated).then((response) => {
      if (response.success) {
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

    let LoginStatus = null;
    if (loggedIn) {
      LoginStatus = <LoggedIn onClick={this.handleLogoutClick} />;
    } else {
      LoginStatus = <NotLoggedIn onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        {LoginStatus}
      </div>
    );
  }
}

function NotLoggedIn(props) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" activeClassName="nav-link" to='/register'>Register</NavLink>
      <NavLink className="nav-link" activeClassName="nav-link" to='/login'>Log in</NavLink>
    </li>
  );
}

function LoggedIn(props) {
  return (
    <span>
    <li className="nav-item">
      <NavLink className="nav-link" activeClassName="nav-link" to='/users'>Your Page</NavLink>
    </li>
    <li className="nav-item">
      <button onClick={props.onClick}>
        Logout
    </button>
    </li>
    </span>
  );
}