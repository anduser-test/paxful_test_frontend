import * as React from 'react';
import { Provider } from 'react-redux';

import './app.scss';
import { store } from '@app/redux/configureStore';
import { Routes } from '@app/routes/routes';

const App = () => (
  <Provider store={store}>
    <div className="main-layout">
      <Routes />
    </div>
  </Provider>
);

export { App };
