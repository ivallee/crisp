import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import Filters from './Filters.jsx';

class Search extends Component {

  doSearch = (query) => {
    console.log(`Searching for ${query}`);
  }

  render() {
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

        <div className="row marketing">
          <div className="col">
            <SearchBar doSearch={this.doSearch}/>
            <Filters />
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
