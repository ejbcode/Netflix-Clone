import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const WhoRoute = ({
  /* eslint-disable */
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/auth/" />
    }
  />
);
