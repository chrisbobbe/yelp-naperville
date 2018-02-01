import React, { Component } from 'react';

import BusinessList from './BusinessList.js';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>List of businesses</h1>
        </header>
        <BusinessList />
      </div>
    );
  }
}
