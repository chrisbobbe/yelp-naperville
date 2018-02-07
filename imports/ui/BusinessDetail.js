import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withTracker } from 'meteor/react-meteor-data';
import Details from '../api/local-collections/details.js';

import YelpRating from './YelpRating.js';
import HoursTable from './HoursTable.js';

import Typography from 'material-ui/Typography';
import PhoneIcon from 'material-ui-icons/Phone';
import MapIcon from 'material-ui-icons/Map';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Chip from 'material-ui/Chip';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

const BusinessDetail = ({
  id,
  business,
  classes
}) => {
  let {
    name,
    image_url,
    url,
    price,
    rating,
    review_count,
    display_phone,
    photos,
    hours,
    categories,
    location,
    transactions
  } = business;

  //TODO: fix redirect so never at '/detail' unless business is defined
  return (
    <Card>
      { !business && <Redirect to='/' /> }
      <a href={url}><CardHeader title={name} /></a>
      <CardContent>
        <GridList cols={Math.max(2, photos.length % 5)}>
          {photos.map((photo, index) => (
            <GridListTile key={index}>
              <img src={photo} alt={`photo ${index} of ${name}`} />
            </GridListTile>
          ))}
        </GridList>
        <List>
          <ListItem>
            <ListItemIcon>
              <YelpRating
                stars={rating}
                reviews={review_count}
              />
            </ListItemIcon>
            <ListItemText primary={`Price: ${price}`} />
          </ListItem>
          <ListItem>
            {categories.map(category => (
              <Chip
                key={category["alias"]}
                label={category["title"]}
                className={classes.chip}
              />
            ))}
          </ListItem>
          <ListItem>
            {transactions.map(transaction => (
              <Chip
                key={transaction}
                label={transaction.replace('_', ' ')}
                className={classes.chip}
              />
            ))}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText
              primary={display_phone}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText
              primary={location["display_address"].join(', ')}
            />
          </ListItem>
        </List>
        <Typography variant='title'>Hours</Typography>
        <Typography variant='caption'>
          {`${hours[0]["is_open_now"] ? 'open' : 'closed'} now`}
        </Typography>
        <HoursTable hours={hours} />
      </CardContent>
    </Card>
  );
}

BusinessDetail.propTypes = {
  id: PropTypes.string,
  business: PropTypes.object,
  classes: PropTypes.object.isRequired
};

export default withTracker((props) => {
  return { business: Details.findOne({ id: props.id })["detail"] };
})(withStyles(styles)(BusinessDetail));
