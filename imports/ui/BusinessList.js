import React from 'react';
import PropTypes from 'prop-types';

const BusinessList = ({
  results
}) => {
  let items = this.props.results.map(result => (
    <BusinessItem name={result.name} rating={result.rating} />
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
