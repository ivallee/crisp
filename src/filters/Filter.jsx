import React, { Component } from 'react';
import PropTypes from 'proptypes';

class Filter extends Component {
  static propTypes = {
    data: PropTypes.object,
    index: PropTypes.number,
    remove: PropTypes.func,
    update: PropTypes.func
  }

  remove = () => {
    this.props.remove(this.props.index);
  }

  update = (event) => {
    let newData = this.props.data;
    newData.value = event.target.value;
    this.props.update(newData, this.props.index);
  }

  render() {
    return (
      <li className="list-group-item">
        <button type="button" className="close" aria-label="Remove" onClick={this.remove}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="form-group row">
          <label htmlFor="example-text-input" className="col-2 col-form-label">{this.props.data.type}</label>
          <div className="col-10">
            <input className="form-control" type="text" value={this.props.data.value} id="example-text-input" onChange={this.update}/>
          </div>
        </div>
      </li>
    );
  }
}
export default Filter;

