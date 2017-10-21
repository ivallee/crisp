import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">

        <div className="header clearfix">
          <nav>
            <ul className="nav nav-pills float-right">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <h3 className="text-muted">Gronsak</h3>
        </div>

        <div className="jumbotron">
          <h3 className="display-3">Gronsak</h3>
          <p className="lead">PLant-based cooking blah blah blah Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus
            ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p>
            <a className="btn btn-lg btn-success" href="#" role="button">Get started</a>
          </p>
        </div>

        <div className="row marketing">
          <div className="col">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Hungry?</label>
              <input type="text" className="form-control" placeholder="What would you like?" />
            </div>

            <h4>Filters</h4>
            <ul className="list-group">
              <li className="list-group-item active">Add a filter</li>
              <li className="list-group-item">Dinner</li>
              <li className="list-group-item">Vegan</li>
              <li className="list-group-item">Fast</li>
            </ul>
          </div>

        </div>

        <footer className="footer">
          <p>&copy; Company 2017</p>
        </footer>

    </div>
    );
  }
}
export default App;
