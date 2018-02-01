import React from 'react';
import PropTypes from 'prop-types';

const BusinessItem = ({
  name,
  rating
}) => (
  <li>
    {this.props.name}: {this.props.rating} stars
  </li>
);

BusinessItem.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number
};

export default BusinessItem;
