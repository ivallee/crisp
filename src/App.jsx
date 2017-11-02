import React, { Component } from 'react';
import UserDataContainer from './UserDataContainer.jsx';
import NavBar from './NavBar.jsx';
import Main from './Main.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
        <UserDataContainer>
          <NavBar />
          <Main />
        </UserDataContainer>
      </div>
    );
  }
}
export default App;
