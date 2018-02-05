import React from 'react';
import PropTypes from 'prop-types';

import YelpRating from './YelpRating';

const BusinessItem = ({
  business
}) => (
  <li>
    <YelpRating stars={business.rating} />{business.name}
  </li>
);

BusinessItem.propTypes = {
  business: PropTypes.object,
};

export default BusinessItem;
