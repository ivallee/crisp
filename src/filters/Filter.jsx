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

  switchType = () => {
    let newData = this.props.data;
    let old = { key: this.props.data.key, btn: this.props.data.btn };

    newData.type = this.props.data.altType;
    newData.btn = this.props.data.altBtn;
    newData.altType = old.type;
    newData.altBtn = old.btn;
    this.props.update(newData, this.props.index);
  }

  buildBtn = () => {
    const btn = this.props.data.btn;
    if(!btn) return '';
    return <input className={`btn btn-sc ${btn.style}`}
      type="button"
      value={btn.text}
      onClick={this.switchType} />;
  }

  buildText = () => {
    if(this.props.data.text) return <input type="text" className='form-control' value={this.props.data.value} onChange={this.update} />;
    return '';
  }

  buildDropdown = () => {
    const dropdown = this.props.data.dropdown;
    if(!dropdown) return '';
    return <select className='form-control' value={this.props.data.value} onChange={this.update} >{dropdown.map(option => {
      return <option value={option.key} key={option.key}>{option.display}</option>;
    })}</select>;
  }

  render() {
    return (
      <li className="list-group-item">
        <button type="button" className="close" aria-label="Remove" onClick={this.remove}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="form-group row">
          <label htmlFor="example-text-input" className="col-2 col-form-label">{this.props.data.displayName}</label>
          <div className="col-10">
            <div className="row">
              {this.buildBtn()}
              <div className="col">
                {this.buildText()}
                {this.buildDropdown()}
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
export default Filter;

