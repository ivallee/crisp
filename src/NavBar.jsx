import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Register from './Register.jsx';
import Login from './Login.jsx';
import LoginControl from './LoginControl.jsx';
import { logout } from './api.js';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
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
      LoginStatus = <LoggedOut />;
    }
    return (
      <nav className="navbar-container">
          {LoginStatus}
        {/* <div className="collapse col" id="demo">
          <Register />
        </div>
        <div className="collapse col" id="demo2">
          <Login />
        </div> */}
        <h3 className='nav-logo'>Crisp</h3>
      </nav>
    );
  }
}
export default NavBar;


function LoggedOut(props) {
  return (
  <nav className="nav nav-pills flex-column flex-sm-row float-right">
    <a className="fill text-sm-center nav-link" href="#demo" data-toggle="collapse">Register</a>
    <a className="fill text-sm-center nav-link" href="#demo2" data-toggle="collapse">Login</a>
    <a className="flex-sm-fill text-sm-center nav-link" href="/">Search</a>
  </nav>
  
  )
}

function LoggedIn(props) {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row float-right">
      <a className="flex-sm-fill text-sm-center nav-link" href="/users">User Page</a>
      <a className="flex-sm-fill text-sm-center nav-link" href="#" onClick={props.onClick}>Log out</a>
      <a className="flex-sm-fill text-sm-center nav-link" href="/">Search</a>
    </nav>
  );
}





