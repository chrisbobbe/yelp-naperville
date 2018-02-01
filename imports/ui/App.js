import React, { Component } from 'react';

import BusinessItem from './BusinessItem.js';

// App component - represents the whole app
export default class App extends Component {
  getBusinessItems() {
    return [
      { title: "business1", rating: 3 },
      { title: "business2", rating: 4 },
      { title: "business3", rating: 4.5 }
    ];
  }

  renderBusinessItems() {
    return this.getBusinessItems().map((businessItem) => (
      // TODO: add props
      <BusinessItem />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>List of businesses</h1>
        </header>

        <ul>
          {this.renderBusinessItems()}
        </ul>
      </div>
    );
  }
}
