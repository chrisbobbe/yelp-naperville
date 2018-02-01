import React, {Component} from 'react';

import SearchBar from './SearchBar'
import BusinessList from './BusinessList';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { results: null };
    this.fetchItems = this.fetchItems.bind(this);
  }

  /* Event handlers */

  fetchItems(query) {
    const ENDPOINT = "https://api.yelp.com/v3/businesses/search";
    const LOCATION = "Naperville, IL";
    let headers = {
      term: query,
      location: LOCATION,
    }
    fetch(ENDPOINT, headers).then(response => {
      return response.json();
    }).then(json => {
      this.setState({results: json["businesses"]});
    });
  }

  /* Lifecycle methods */

  render() {
    return (
      <SearchBar searchFunction={fetchItems} />
      <BusinessList results={this.state.results} />
    );
  }
}

export default Search;
