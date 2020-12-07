import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '../pages/login';
import { Register } from '../pages/register';

export const AuthRoute = () => (
  <Route path="/auth" exact component={Login}>
    <Switch>
      <Route exact path="/auth/login.js" component={Login} />
      <Route exact path="/auth/register.js" component={Register} />
    </Switch>
  </Route>
);
