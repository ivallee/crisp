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
      const buttonStyle = (category.key === this.props.selectedCategory) ? 'btn btn-success col' : 'btn btn-secondary col';
      return <li className="list-group-item" key={index}>
        <input className={buttonStyle} type="button" value={category.name} onClick={this.setSelectedCategory(category.key)} />
      </li>;
    });
  }

  render() {
    return (
      <ul className="list-group col-10">
        {this.renderCategoryList()}
        <li className="list-group-item" >
          <input className="form-control"
            type="text"
            placeholder="Add Category"
            value={this.state.newCategoryName}
            onChange={this.changeCategoryName} />
          <input className="btn btn-secondary col" type="button" value="+" onClick={this.addCategory} />
        </li>
      </ul>
    );
  }
}
export default Categories;
