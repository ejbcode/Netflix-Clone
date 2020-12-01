import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineSearch, AiOutlineGift, AiFillBell } from 'react-icons/ai';
import logoImg from '../assets/logo.png';
import profileImg from '../assets/profile.png';

const NavStyle = styled.nav`
  padding: 0 4rem;
  border: red solid 2px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
  }
  li {
    padding: 1rem;
  }
  .primary-nav {
    display: flex;
    align-items: center;
    justify-content: space-space-between;
  }
  .logo {
    width: 90px;
    height: 30px;
    border: red solid 1px;
  }
  .logo-profile {
    max-width: 30px;
    border-radius: 7px;
  }
`;

export const Nav = () => (
  <NavStyle>
    <div className="primary-nav">
      <img className="logo" src={logoImg} alt="Logo" />

      <ul>
        <li>
          <NavLink exact to="/" activeClassName="nav-active">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/search" activeClassName="nav-active">
            Tv Shows
          </NavLink>
        </li>
        <li>
          <NavLink to="/popular" activeClassName="nav-active">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/popular" activeClassName="nav-active">
            New & Popular
          </NavLink>
        </li>

        <li>
          <NavLink to="/favorites" activeClassName="nav-active">
            My List
          </NavLink>
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <li>
          <AiOutlineSearch />
        </li>
        <li>
          <AiOutlineGift />
        </li>
        <li>
          <AiFillBell />
        </li>
        <li>KIDS</li>
        <li>
          <img className="logo-profile" src={profileImg} alt="Logo profile" />
        </li>
      </ul>
    </div>
  </NavStyle>
);
