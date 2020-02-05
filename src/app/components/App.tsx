import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '@app/redux/configureStore';
import { Routes } from '@app/routes/routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export { App };
