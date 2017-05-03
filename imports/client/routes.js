import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router'

import {Meteor} from 'meteor/meteor'
import {render} from 'react-dom'

import App from '/imports/client/App'

Meteor.startup(() => {
  render(
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
    </Router>,
    document.getElementById('render-target')
  )
});
