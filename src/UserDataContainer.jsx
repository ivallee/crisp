import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { getUser, getUserRecipes, getUserFilters, getUserCategories } from './api.js';

class UserDataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: '',
      savedRecipes: [],
      savedFilters: [],
      categories: []
    };
  }

  static propTypes = {
    children: PropTypes.node
  }

  loadUserData = async () => {
    const user = await getUser();
    if(user) {
      const savedRecipes = await getUserRecipes();
      const savedFilters = await getUserFilters();
      const categories = await getUserCategories();
      this.setState({ username: user.name, loggedIn: true, savedRecipes, savedFilters, categories });
    }
    else {
      this.setState({ username: '', loggedIn: false, savedRecipes: [], savedFilters: [] });
    }
  }

  componentDidMount() {
    this.loadUserData();
  }

  render() {
    const userData = this.state;
    userData.userUpdated = this.loadUserData;
    let children = React.Children.map(this.props.children, child => React.cloneElement(child, userData));
    return <div>{children}</div>;
  }
}
export default UserDataContainer;