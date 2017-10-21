import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <h4>Filters</h4>
        <ul className="list-group">
          <li className="list-group-item active">Add a filter</li>
          <li className="list-group-item">Dinner</li>
          <li className="list-group-item">Vegan</li>
          <li className="list-group-item">Fast</li>
        </ul>
      </div>
    );
  }
}
export default Footer;
