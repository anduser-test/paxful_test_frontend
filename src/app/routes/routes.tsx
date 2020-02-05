import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const BrowserHistory = createBrowserHistory();

const Routes = () => (
  <Router history={BrowserHistory}>
    <Switch>
      <Route exact path="/" component={() => <h1>Paxful_test</h1>} />
    </Switch>
  </Router>
);

export { Routes };
