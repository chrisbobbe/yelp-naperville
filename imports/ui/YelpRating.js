import React from 'react';
import PropTypes from 'prop-types';

const YelpRating = ({
  stars
}) => {
  let source = 'images/';
  if (Number.isInteger(stars)) {
    source += `small_${stars.toString()}@2x.png`;
  } else {
    source += `small_${stars.toString()[0]}_half@2x.png`;
  }
  return (
    <span>
      <img src={source} alt={'rating: ' + stars}/>
      <span>{stars}</span>
    </span>
  );
};

YelpRating.propTypes = {
  stars: PropTypes.number.isRequired
};

export default YelpRating;
