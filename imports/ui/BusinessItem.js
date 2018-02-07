import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import YelpRating from './YelpRating';

import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';

class BusinessItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onSelect(this.props.business.id);
  }

  render() {
    return (
      <ListItem button onClick={this.handleClick} divider>
        <ListItemIcon>
          <YelpRating
            stars={this.props.business["rating"]}
            reviews={this.props.business["review_count"]}/>
        </ListItemIcon>
        <ListItemText primary={this.props.business.name} />
      </ListItem>
    );
  }
};

export default BusinessItem;
