import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills float-right">
            <li className="nav-item">
              <NavLink activeClassName="nav-link" to='/'>Home</NavLink>
              {/* <a className="nav-link" href="#">Home
              </a> */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link" to='/results'>Results</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Log in</a> 
              {/* if/case logged in -> display user.email */}
            </li>
          </ul>
        </nav>
        <h3 className="text-muted">Crisp</h3>
      </div>
    );
  }
}
export default NavBar;

