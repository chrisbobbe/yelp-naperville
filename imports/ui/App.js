import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Nav from './Nav.js';
import Search from './Search.js';
import BusinessDetail from './BusinessDetail.js'

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { businessId: '' };
    this.handleSelectBusiness = this.handleSelectBusiness.bind(this);
  }

  handleSelectBusiness(id) {
    this.setState({ businessId: id});
  }

  render() {
    return (
      <div className="container">
        <Route exact path="/" render={(props) => (
          <Search onSelectBusiness={this.handleSelectBusiness} />
        )} />
        <Route exact path="/detail" render={(props) => (
          <BusinessDetail id={this.state.businessId} />
        )} />
        <Nav />
      </div>
    );
  }
}

export default App;
