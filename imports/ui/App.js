import React, { Component } from 'react';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'

import Search from './Search.js';
import BusinessDetail from './BusinessDetail.js'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui-icons/Search';
import Reboot from 'material-ui/Reboot';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

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
        <Reboot />
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color='secondary'
              onClick={(e) => { this.props.history.push('/'); }}
            >
              <SearchIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Yelp Search App
            </Typography>
          </Toolbar>
        </AppBar>
        <Route exact path="/" render={(props) => (
          <Search onSelectBusiness={this.handleSelectBusiness} />
        )} />
        <Route exact path="/detail" render={(props) => (
          <BusinessDetail id={this.state.businessId} />
        )} />
      </div>
    );
  }
}

export default withRouter(App);
