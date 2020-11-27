import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import AppRoute from './routes/AppRoute';

const App = () => (
  <Provider store={store}>
    <AppRoute />
  </Provider>
);

export default App;
