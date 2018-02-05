import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import YelpRating from './YelpRating';

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
      <li onClick={this.handleClick}>
        <YelpRating stars={this.props.business.rating} />{this.props.business.name}
      </li>
    );
  }
};

export default BusinessItem;
