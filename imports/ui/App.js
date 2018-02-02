import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Nav from './Nav.js';
import Search from './Search.js';
import BusinessDetail from './BusinessDetail.js'

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Route path="/" component={Search} />
        // TODO: add props to BusinessDetail with render=
        <Route path="/detail" component={BusinessDetail} />
        <Nav />
      </div>
    );
  }
}
