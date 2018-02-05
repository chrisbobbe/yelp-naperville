import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';
import { EJSON } from 'meteor/ejson'

export const SearchResultArrays = new Mongo.Collection(null);
SearchResultArrays.insert({ query: '', businesses: [] });

import SearchBar from './SearchBar';
import BusinessList from './BusinessList';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '', loading: false };
    this.fetchItems = this.fetchItems.bind(this);
  }

  /* Event handlers */

  fetchItems(query) {
    if (!SearchResultArrays.findOne({ query: query })) {
      SearchResultArrays.insert({ query: query, businesses: [] });
      this.setState({ loading: true });
    }
    this.setState({ query: query });
    Meteor.call('searchYelp', 'Naperville, IL', query, (error, result) => {
      if (error) {
        console.error('Something went wrong when connecting to Yelp.');
      } else {
        let businesses = EJSON.parse(result['content'])['businesses'];
        SearchResultArrays.update({ query: query }, { $set: { businesses: businesses } });
      }
      this.setState({ loading: false });
    });
  }

  /* Lifecycle methods */

  render() {
    return (
      <div>
        <SearchBar
          searchFunction={this.fetchItems}
          loading={this.state.loading}
        />
        <BusinessList query={this.state.query} />
      </div>
    );
  }
}

export default Search;
