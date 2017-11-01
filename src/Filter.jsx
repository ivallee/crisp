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
    newData.exclude = !newData.exclude;
    this.props.update(newData, this.props.index);
  }

  buildBtn = () => {
    const btnText = this.props.data.exclude? this.props.data.exclude_btn : this.props.data.btn;
    const btnStyle = this.props.data.exclude? 'btn-danger' : 'btn-main';
    if(!btnText) return '';
    return <input className={`btn btn-sc button-custom ${btnStyle}`}
      type="button"
      value={btnText}
      onClick={this.switchType} />;
  }

  buildText = () => {
    if(this.props.data.text) return <input type="text" className='form-control-custom-ingredient' value={this.props.data.value} onChange={this.update} ref="textInput" />;
    return '';
  }

  buildDropdown = () => {
    const dropdown = this.props.data.dropdown;
    if(!dropdown) return '';
    return <select className='form-control form-control-custom' value={this.props.data.value} onChange={this.update} ref="selectInput" >{dropdown.map(option => {
      return <option value={option.key} key={option.key}>{option.display}</option>;
    })}</select>;
  }

  focus = () => {
    if(this.props.data.text) this.refs.textInput.focus();
    else if(this.props.data.dropdown) this.refs.selectInput.focus();
  }

  render() {
    const test = this.props.data.saved_filter_id ? {background: 'tomato'} : {};
    return (
<<<<<<< HEAD
      <li className="list-group-item list-group-item-custom" style={test}>
        <button type="button" className="close" aria-label="Remove" onClick={this.remove}>
          <span aria-hidden="true">&times;</span>
        </button>
=======
      <li className="list-group-item" style={test}>
        {/* <button type="button" className="close" aria-label="Remove" onClick={this.remove}> */}
        <button type="button" className="btn btn-delete close" onClick={this.remove}><i className="fa fa-lg fa-trash-o"></i></button>
>>>>>>> master
        <div className="form-group row">
          <label htmlFor="example-text-input" className="col-2 col-form-label">{this.props.data.type}</label>
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

