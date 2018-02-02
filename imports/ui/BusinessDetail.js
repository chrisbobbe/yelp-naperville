import React from 'react';
import PropTypes from 'prop-types';

const BusinessDetail = ({
  business
}) => {
  let info = Object.entries(business).map(entry => {
    return (
      <li>
        {entry[0]}: {entry[1]}
      </li>
    )
  })
  return (
    <div>
      <header>
        {business.name}
      </header>
      <ul>
        {info}
      </ul>
    </div>
  );
}

BusinessDetail.propTypes = {
  business: PropTypes.object
};

export default BusinessDetail;
