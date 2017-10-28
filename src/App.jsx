import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  render() {
    return (
      <div>
         <div className="container">
         <NavBar />
       {/* </div> */}
       {/* <div className="container"> */}
         <Main />
       {/* </div> */}
       {/* <div className="container"> */}
         <Footer />
       </div>
      </div>
    );
  }
}
export default App;
