import React, { Component } from 'react';

import Nav from './Nav.js';
import BusinessList from './BusinessList.js';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Route path="/" component={Search} />
        <Route path="/detail" component={BusinessDetail} />
        <Nav />
      </div>
    );
  }
}
