import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebaseConfig';
import GlobalStyle from '../GlobalStyle';

import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { Home } from '../pages/home';

import { login } from '../components/redux/actions/authAction';
import { PrivateRoute } from './PrivateRoute';
import { Movies } from '../pages/movies';
import { TvShows } from '../pages/tvShows';
import { Nav } from '../components/Nav';
import { PublicRoute } from './PublicRoute';

const AppRoute = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Wait...</h1>;
  }

  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/app/:path?" exact>
            <Nav />
            <PrivateRoute
              exact
              path="/app"
              component={Home}
              isAuthenticated={isLoggedIn}
            />
            <PrivateRoute
              exact
              path="/app/movies"
              component={Movies}
              isAuthenticated={isLoggedIn}
            />

            <PrivateRoute
              exact
              path="/app/tvshows"
              component={TvShows}
              isAuthenticated={isLoggedIn}
            />
            <Redirect to="/app" />
          </Route>

          <Route path="/auth/:path?" exact>
            <Switch>
              <PublicRoute
                exact
                path="/auth/"
                component={Login}
                isAuthenticated={isLoggedIn}
              />
              <PublicRoute
                exact
                path="/auth/"
                component={Register}
                isAuthenticated={isLoggedIn}
              />
              <Redirect to="/auth" />
            </Switch>
          </Route>

          <Redirect to="/app" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRoute;
