import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';

const YelpRating = ({
  stars,
  reviews
}) => {
  let source = 'images/';
  if (Number.isInteger(stars)) {
    source += `small_${stars.toString()}@2x.png`;
  } else {
    source += `small_${stars.toString()[0]}_half@2x.png`;
  }
  return (
    <div>
      <img src={source} alt={'rating: ' + stars} />
      <Typography variant='caption'>({reviews} reviews)</Typography>
    </div>
  );
};

YelpRating.propTypes = {
  stars: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired
};

export default YelpRating;
