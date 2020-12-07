import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { Home } from '../pages/home';
import { Movies } from '../pages/movies';
import { myList } from '../pages/myList';
import { Popular } from '../pages/popular';
import { search } from '../pages/search';
import { TvShows } from '../pages/tvShows';

export const MainRoute = () => (
  <Route>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/tvshows" component={TvShows} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/popular" component={Popular} />
      <Route exact path="/mylist" component={myList} />
      <Route exact path="/search" component={search} />
    </Switch>
  </Route>
);
