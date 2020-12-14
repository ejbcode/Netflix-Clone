import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebaseConfig';
import GlobalStyle from '../GlobalStyle';

import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { Home } from '../pages/home';
import { Who } from '../pages/who';

import { login } from '../components/redux/actions/authAction';
import { PrivateRoute } from './PrivateRoute';
import { Movies } from '../pages/movies';
import { TvShows } from '../pages/tvShows';
import { Nav } from '../components/Nav';
import { PublicRoute } from './PublicRoute';
import { MyList } from '../pages/myList';
import { Popular } from '../pages/popular';

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
          <Route path="/auth/:path?" exact>
            <Switch>
              <PublicRoute
                exact
                path="/auth/"
                component={Login}
                isAuthenticated={isLoggedIn}
              />
              <Redirect to={isLoggedIn ? '/app' : '/auth'} />

              <PublicRoute
                exact
                path="/auth/register"
                component={Register}
                isAuthenticated={isLoggedIn}
              />
              <Redirect to="/auth" />
            </Switch>
          </Route>
          <Route>
            <Nav />
            <Switch>
              <PrivateRoute
                exact
                path="/"
                component={Home}
                isAuthenticated={isLoggedIn}
              />
              <PrivateRoute
                exact
                path="/movies"
                component={Movies}
                isAuthenticated={isLoggedIn}
              />
              <PrivateRoute
                exact
                path="/tvshows"
                component={TvShows}
                isAuthenticated={isLoggedIn}
              />
              <PrivateRoute
                exact
                path="/popular"
                component={Popular}
                isAuthenticated={isLoggedIn}
              />{' '}
              <PrivateRoute
                exact
                path="/mylist"
                component={MyList}
                isAuthenticated={isLoggedIn}
              />
              <PrivateRoute
                exact
                path="/who"
                component={Who}
                isAuthenticated={isLoggedIn}
              />
            </Switch>
          </Route>

          <Redirect to="/app" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRoute;
