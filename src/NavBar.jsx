import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Register from './Register.jsx';
import Modal from './Modal.jsx';
import LoginControl from './LoginControl.jsx';

class NavBar extends Component {
  render() {
    return (
      <div>
        {/* <Modal >
          <Register />
        </Modal > */}
        <nav>
          <ul className="nav nav-pills float-right">
            <li className="nav-item">
              <NavLink className='nav-link' activeClassName="nav-link" to='/'>Home</NavLink>
              {/* <a className="nav-link" href="#">Home
              </a> */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link" to='/results'>Results</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" activeClassName="nav-link" to='/register'>Register</NavLink>
            </li>
            <li>
            <LoginControl />
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
              Launch demo modal
            </button> */}
            </li>
          </ul>
        </nav>
        <h3 className='nav-logo'>Crisp</h3>
      </div>
    );
  }
}
export default NavBar;

