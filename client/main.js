import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('render-target'));
});
