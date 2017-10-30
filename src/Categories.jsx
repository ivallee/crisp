import React, { Component } from 'react';
import PropTypes from 'proptypes';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: ''
    };
  }

  static propTypes = {
    categories: PropTypes.array,
    addCategory: PropTypes.func
  }

  changeCategoryName = (event) => {
    this.setState({ categoryName: event.target.value });
  }

  addCategory = () => {
    if(this.state.categoryName) {
      this.props.addCategory({name: this.state.categoryName});
      this.setState({ categoryName: '' });
    }
  }

  render() {
    return (
      <ul className="list-group col-10">
        {this.props.categories.map((category, index) => <li className="list-group-item" key={index}>{category.name}</li>)}
        <li className="list-group-item" >
          <input className="form-control"
            type="text"
            placeholder="Add Category"
            value={this.state.categoryName}
            onChange={this.changeCategoryName} />
          <input className="btn btn-secondary col" type="button" value="+" onClick={this.addCategory} />
        </li>
      </ul>
    );
  }
}
export default Categories;
