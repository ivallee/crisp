import React, { Component } from 'react';
import Search from './Search.jsx';
import PropTypes from 'proptypes';

class Home extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="jumbotron">
          <h3 className="display-3">Gronsak</h3>
          <p className="lead">PLant-based cooking blah blah blah Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus
            ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p>
            <a className="btn btn-lg btn-success" href="#" role="button">Get started</a>
          </p>
        </div>


        <Search sendQuery={this.props.sendQuery}/>
      </div>


    );
  }
}
export default Home;

