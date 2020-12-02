import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineSearch, AiOutlineGift, AiFillBell } from 'react-icons/ai';
import logoImg from '../assets/logo.png';
import profileImg from '../assets/profile.png';

const NavStyle = styled.nav`
  z-index: 10;
  position: relative;
  font-size: 1rem;
  padding: 0 4rem;
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
    padding: 0.4rem;
  }
  .primary-nav {
    display: flex;
    align-items: center;
    justify-content: space-space-between;
  }
  .logo {
    height: 25px;
  }
  .logo-profile {
    max-width: 30px;
    border-radius: 7px;
  }
  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: var(--colorTxt2);
    transition: color 0.5s;
  }
  a:hover {
    color: var(--colorTxtHover);
  }
  .secundary-nav {
    font-size: 2rem;
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
          <NavLink to="/tvshows" activeClassName="nav-active">
            Tv Shows
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" activeClassName="nav-active">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/popular" activeClassName="nav-active">
            New & Popular
          </NavLink>
        </li>

        <li>
          <NavLink to="/mylist" activeClassName="nav-active">
            My List
          </NavLink>
        </li>
      </ul>
    </div>

    <div className="secundary-nav">
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
