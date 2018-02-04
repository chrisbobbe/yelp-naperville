import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { check } from 'meteor/check';

Meteor.startup(() => {
  Meteor.methods({
    searchYelp(location, term) {
      check(location, String);
      check(term, String);
      const API_KEY = Meteor.settings.yelp.API_KEY;
      const URL = 'https://api.yelp.com/v3/businesses/search';
      const options = {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          location: location,
          term: term,
        },
      }
      return HTTP.get(URL, options);
    }
  })
});
