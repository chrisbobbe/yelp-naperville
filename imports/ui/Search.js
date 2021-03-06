import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { withTracker } from 'meteor/react-meteor-data';
import { EJSON } from 'meteor/ejson'

import Details from '../api/local-collections/details.js';
import SearchResultArrays from '../api/local-collections/searchResultArrays.js';

import Card, { CardContent, CardHeader } from 'material-ui/Card';

import SearchBar from './SearchBar';
import BusinessList from './BusinessList';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '', loading: false };
    this.fetchBusinesses = this.fetchBusinesses.bind(this);
    this.fetchDetail = this.fetchDetail.bind(this);
  }

  /* Event handlers */

  fetchBusinesses(query) {
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
      if (this.state.loading) {
        this.setState({ loading: false });
      }
    });
  }

  fetchDetail(id) {
    this.props.onSelectBusiness(id);
    if (!Details.findOne({ id: id  })) {
      Details.insert({ id: id, detail: {} });
      this.setState({ loading: true });
    } else {
      // React router client-side "redirect"
      this.props.history.push('/detail');
    }
    Meteor.call('getYelpDetail', id, (error, result) => {
      if (error) {
        console.error('Something went wrong when connecting to Yelp.');
      } else {
        let detail = EJSON.parse(result['content']);
        Details.update({ id: id }, { $set: { detail: detail } });
      }
      if (this.state.loading) {
        this.setState({ loading: false });
        this.props.history.push('/detail')
      }
    });
  }

  /* Lifecycle methods */

  render() {
    return (
      <Card>
        <CardHeader title="Search Naperville" />
        <CardContent>
          <SearchBar
            searchFunction={this.fetchBusinesses}
            loading={this.state.loading}
          />
          <BusinessList query={this.state.query} onSelectBusiness={this.fetchDetail} />
        </CardContent>
      </Card>
    );
  }
}

export default withRouter(Search);
