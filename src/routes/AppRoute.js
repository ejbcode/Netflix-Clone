import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebaseConfig';
import GlobalStyle from '../GlobalStyle';

import { who } from '../pages/who';
import { MainRoute } from './MainRoute';
import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { login } from '../components/redux/actions/authAction';

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
          <Route exact path="/who" component={who} />
          <Route path="/auth/:path?" exact>
            <Switch>
              <Route path="/auth" exact component={Login} />
              <Route path="/auth/register" component={Register} />
            </Switch>
          </Route>
          <MainRoute />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRoute;
