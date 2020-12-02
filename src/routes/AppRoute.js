import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from '../GlobalStyle';
import { Nav } from '../components/Nav';
import { Home } from '../pages/home';
import { TvShows } from '../pages/tvShows';
import { Popular } from '../pages/popular';
import { Movies } from '../pages/movies';
import { search } from '../pages/search';
import { myList } from '../pages/myList';

const AppRoute = () => (
  <div>
    <GlobalStyle />
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tvshows" component={TvShows} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/mylist" component={myList} />

        <Route exact path="/search" component={search} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppRoute;
