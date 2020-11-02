/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prefer-stateless-function */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Provider } from 'react-redux';
import RepositoryList from './components/RepositoryList';
import store from './store';

const App = () => (
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);

export default App;
