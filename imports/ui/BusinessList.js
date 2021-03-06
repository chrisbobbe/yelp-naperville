import React from 'react';
import PropTypes from 'prop-types';

import { withTracker } from 'meteor/react-meteor-data';
import SearchResultArrays from '../api/local-collections/searchResultArrays.js';

import BusinessItem from './BusinessItem';

import List from 'material-ui/List';

const BusinessList = ({
  query,
  businesses,
  onSelectBusiness
}) => {
  let items = businesses.map(business => (
    <BusinessItem
      business={business}
      key={business.id}
      onSelect={onSelectBusiness}
    />
  ));
  return (
    <List>
      {items}
    </List>
  );
}

BusinessList.propTypes = {
  businesses: PropTypes.array,
  query: PropTypes.string,
  onSelectBusiness: PropTypes.func
};

export default withTracker((props) => {
  return { businesses: SearchResultArrays.findOne({ query: props.query })["businesses"] };
})(BusinessList);
