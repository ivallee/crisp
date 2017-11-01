import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'proptypes';
import Register from './Register.jsx';
import Login from './Login.jsx';
import { logout } from './api.js';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  static propTypes = {
    loggedIn: PropTypes.bool,
    username: PropTypes.string,
    onClick: PropTypes.func,
    userUpdated: PropTypes.func
  }


  handleLogoutClick() {
    logout(this.props.userUpdated).then(() => {
      this.setState({
        isLoggedIn: false
      });
    });
  }

  render() {
    const { loggedIn } = this.props;
    let LoginStatus = null;
    if (loggedIn) {
      LoginStatus = <LoggedIn onClick={this.handleLogoutClick} username={this.props.username} />;
    } else {
      LoginStatus = <LoggedOut />;
    }
    return (
      <nav className="navbar-container content-blocks">
        {LoginStatus}
        <Register userUpdated={this.props.userUpdated} />
        <Login userUpdated={this.props.userUpdated} />
        <h3 className='nav-logo'>Crisp</h3>
      </nav>
    );
  }
}
export default NavBar;


function LoggedOut() {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row float-right">
      <a className="fill text-sm-center nav-link" href="#demo" data-toggle="modal" data-target="#exampleModal">Register</a>
      <a className="fill text-sm-center nav-link" href="#demo2" data-toggle="modal" data-target="#exampleModal2">Login</a>
      <NavLink className="nav-link" activeClassName="nav-link" to='/'>Search</NavLink>
    </nav>
  );
}

function LoggedIn(props) {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row float-right">
      {<a className="flex-sm-fill text-sm-center nav-link">Logged in as: {props.username}</a>}
      <NavLink className="nav-link" activeClassName="nav-link" to='/users'>Your Page</NavLink>
      <a className="flex-sm-fill text-sm-center nav-link" href="#" onClick={props.onClick}>Log out</a>
      <NavLink className="nav-link" activeClassName="nav-link" to='/'>Search</NavLink>
    </nav>
  );
}


