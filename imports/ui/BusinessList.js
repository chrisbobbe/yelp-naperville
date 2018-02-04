import React from 'react';
import PropTypes from 'prop-types';

import BusinessItem from './BusinessItem';

const BusinessList = ({
  results
}) => {
  let items = results.map(business => (
    <BusinessItem business={business} key={business.id} />
  ));
  return (
    <ul>
      {items}
    </ul>
  );
}

BusinessList.propTypes = {
  results: PropTypes.array
};

export default BusinessList;
