import React, {Component} from 'react';

import SearchBar from './SearchBar';
import BusinessList from './BusinessList';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
    this.fetchItems = this.fetchItems.bind(this);
  }

  /* Event handlers */

  fetchItems(query) {
    const ENDPOINT = "https://api.yelp.com/v3/businesses/search";
    const LOCATION = "Naperville, IL";
    // TODO: deal with CORS issue and hide API_KEY (some kind of backend?)
    const API_KEY = "Sh74Zjv_p3yhL9nCRjacdlEBPZ6okKjecxKZMQkHkwsC_F7DrflHjTfvavdCY3uoPPRQGKxjbpIbF8aKyaDHBRTs4cMnkdpXfU5lkWY7iimEhp8YE9bU5GNgRXpzWnYx";
    let headers = new Headers({ Authorization: `Bearer ${API_KEY}` });
    fetch(ENDPOINT).then(response => {
      console.log(response);
      return response.json();
    }).then(json => {
      this.setState({ results: json["businesses"] });
    }).catch(error => {
      console.log('There has been a problem with your fetch operation: ', error.message);
    });
  }

  /* Lifecycle methods */

  render() {
    return (
      <div>
        <SearchBar searchFunction={this.fetchItems} />
        <BusinessList results={this.state.results} />
      </div>
    );
  }
}

export default Search;
