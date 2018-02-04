import React, { Component } from 'react';

import { EJSON } from 'meteor/ejson'

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
    Meteor.call('searchYelp', 'Naperville, IL', query, (error, result) => {
      if (error) {
        console.error('Something went wrong when connecting to Yelp.');
      } else {
        this.setState({ results: EJSON.parse(result['content'])['businesses'] });
      }
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
