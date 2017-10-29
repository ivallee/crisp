import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { getUser, getUserRecipes } from './api.js';

class UserDataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: '',
      savedRecipes: []
    };
  }

  static propTypes = {
    children: PropTypes.node
  }

  componentDidMount() {
    async () => {
      const user = await getUser();
      if(user) {
        const savedRecipes = await getUserRecipes();
        this.setState({ username: user.name, loggedIn: true , savedRecipes});
      }
      else {
        this.setState({ username: '', loggedIn: false, savedRecipes: []});
      }
    };
  }

  render() {
    let children = React.Children.map(this.props.children, child => React.cloneElement(child, this.state));
    return <div>{children}</div>;
  }
}
export default UserDataContainer;