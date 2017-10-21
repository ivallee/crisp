import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default App;
