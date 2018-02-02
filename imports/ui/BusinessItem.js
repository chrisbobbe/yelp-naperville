import React from 'react';
import PropTypes from 'prop-types';

const BusinessItem = ({
  business
}) => (
  <li>
    {business.name}: {business.rating} stars
  </li>
);

BusinessItem.propTypes = {
  business: PropTypes.object,
};

export default BusinessItem;
