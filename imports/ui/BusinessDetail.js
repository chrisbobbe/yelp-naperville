import React from 'react';
import PropTypes from 'prop-types';

import { withTracker } from 'meteor/react-meteor-data';
import Details from '../api/local-collections/details.js';

const BusinessDetail = ({
  id,
  business
}) => {
  let info = Object.entries(business).map(entry => {
    return (
      <li key={`${id}-${entry[0]}`}>
        {entry[0].toString()}: {entry[1].toString()}
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
  id: PropTypes.string,
  business: PropTypes.object
};

export default withTracker((props) => {
  return { business: Details.findOne({ id: props.id })["detail"] };
})(BusinessDetail);
