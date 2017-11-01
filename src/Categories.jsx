import React, { Component } from 'react';
import PropTypes from 'proptypes';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCategoryName: '',
      selectedCategory: this.props.selectedCategory
    };
  }

  static propTypes = {
    categories: PropTypes.array,
    addCategory: PropTypes.func,
    changeCategory: PropTypes.func,
    deleteCategory: PropTypes.func,
    selectedCategory: PropTypes.string
  }

  changeCategoryName = (event) => {
    this.setState({ newCategoryName: event.target.value });
  }

  addCategory = () => {
    if(this.state.newCategoryName) {
      this.props.addCategory({ name: this.state.newCategoryName });
      this.setState({ newCategoryName: '' });
    }
  }

  setSelectedCategory = (selectedCategory) => {
    return () => {
      this.props.changeCategory(selectedCategory);
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ selectedCategory: props.selectedCategory });
  }

  renderCategoryList = () => {
    const categories = [{ name: 'All Recipes' }, ...this.props.categories];
    return categories.map((category, index) => {
      category.key = (index > 0) ? category.name : '';
      const buttonStyle = (category.key === this.props.selectedCategory) ? 'active' : 'inactive';
      return <li className={'list-group-item ' + buttonStyle} key={index}>
        <div className='category-item d-flex justify-content-between' onClick={this.setSelectedCategory(category.key)}>{category.name} {index > 0 && <button type="button" className="btn btn-delete" onClick={() => this.props.deleteCategory(category.name)}><i className="fa fa-lg fa-trash-o pull-right"></i></button>}</div>
      </li>;
    });
  }

  render() {
    return (
      <ul className="list-group d-flex justify-content-between">
        {this.renderCategoryList()}
        <li className="list-group-item" >
          <input className="form-control"
            type="text"
            placeholder="New Category"
            value={this.state.newCategoryName}
            onChange={this.changeCategoryName} />
          <input className="btn btn-block btn-sm btn-main" type="button" value="Add" onClick={this.addCategory} />
        </li>
      </ul>
    );
  }
}
export default Categories;
