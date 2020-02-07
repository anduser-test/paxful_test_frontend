import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ChatsContainer } from '@app/containers/Chats/Chats.container';
import { ChatContainer } from '@app/containers/Chat/Chat.container';

export const BrowserHistory = createBrowserHistory();

const Routes = () => (
  <Router history={BrowserHistory}>
    <ChatsContainer />
    <Switch>
      <Route exact path="/:chatId" component={ChatContainer} />
    </Switch>
  </Router>
);

export { Routes };
