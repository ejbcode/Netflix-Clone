import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from '../GlobalStyle';
import { Popular } from '../pages/popular';
import { main } from '../pages/main';
import { search } from '../pages/search';
import { upcoming } from '../pages/upcoming';
import { Nav } from '../components/Nav';
import { favorites } from '../pages/favorites';

const AppRoute = () => (
  <div>
    <GlobalStyle />
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={main} />
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/favorites" component={favorites} />
        <Route exact path="/search" component={search} />
        <Route exact path="/upcoming" component={upcoming} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppRoute;
