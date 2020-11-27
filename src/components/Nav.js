import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => (
  <div>
    <NavLink exact to="/" activeClassName="nav-active">
      Home
    </NavLink>
    <NavLink to="/popular" activeClassName="nav-active">
      Popular
    </NavLink>

    <NavLink to="/search" activeClassName="nav-active">
      Search
    </NavLink>

    <NavLink to="/upcoming" activeClassName="nav-active">
      Upcoming
    </NavLink>
    <NavLink to="/favorites" activeClassName="nav-active">
      Favorites
    </NavLink>
  </div>
);
