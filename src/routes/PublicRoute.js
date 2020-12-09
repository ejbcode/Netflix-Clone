import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  /* eslint-disable */
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);
