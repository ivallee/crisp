import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Register from './Register.jsx';
import Modal from './Modal.jsx';
import LoginControl from './LoginControl.jsx';

class NavBar extends Component {
  render() {
    return (
        <nav>
          <ul className="nav nav-pills float-right">
            <li className="nav-item">
              <NavLink className='nav-link' activeClassName="nav-link" to='/'>Search</NavLink>
            </li>
            <LoginControl {...this.props}/>
          </ul>
        <h3 className='nav-logo'>Crisp</h3>
        </nav>
    );
  }
}
export default NavBar;

// <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
//   <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <a className="navbar-brand" href="#">Navbar</a>
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav">
//     <NavLink className='nav-link' activeClassName="nav-link" to='/'>Home</NavLink>
//     <NavLink className="nav-link" activeClassName="nav-link" to='/register'>Register</NavLink>
//     <NavLink className="nav-link" activeClassName="nav-link" to='/register'>Register</NavLink>
//       <a className="nav-item nav-link disabled" href="#">Disabled</a>
//     </div>
//   </div>
// </nav>