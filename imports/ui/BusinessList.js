import React from 'react';
import PropTypes from 'prop-types';

import { withTracker } from 'meteor/react-meteor-data';
import { SearchResultArrays } from './Search';

import BusinessItem from './BusinessItem';

const BusinessList = ({
  query,
  businesses
}) => {
  let items = businesses.map(business => (
    <BusinessItem business={business} key={business.id} />
  ));
  return (
    <ul>
      {items}
    </ul>
  );
}

BusinessList.propTypes = {
  businesses: PropTypes.array,
  query: PropTypes.string
};

export default withTracker((props) => {
  return { businesses: SearchResultArrays.findOne({ query: props.query })["businesses"] };
})(BusinessList);
