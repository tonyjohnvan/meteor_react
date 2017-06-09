import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'

import {render} from 'react-dom'

import App from '/imports/client/App'
import MainLayout from '/imports/client/layouts/MainLayout'
import About from '/imports/client/pages/About'

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={App} />
        <Route path='/about' component={About} />
        <Route path='/:id' component={App} />
      </Route>
    </Router>,
    document.getElementById('render-target')
  )
});
