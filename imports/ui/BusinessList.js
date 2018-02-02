import React from 'react';
import PropTypes from 'prop-types';

const BusinessList = ({
  results
}) => {
  let items = results.map(business => (
    <BusinessItem business={business} />
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
