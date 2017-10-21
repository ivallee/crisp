import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills float-right">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home
                  <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <h3 className="text-muted">Gronsak</h3>
      </div>
    );
  }
}
export default NavBar;

