import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import logoImg from '../assets/logo.png';
import { logoutFromFirebase } from './redux/actions/authAction';
import { ProfileRow } from './ProfileRow';
import { SearchInput } from './SearchInput';

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 2000px;
  margin: 0 auto;
  position: fixed;
  z-index: 110;
  right: 0;
  left: 0;
  --colorBgNav: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  --colorBgNav2Black: #141414;
  font-size: 1rem;
  padding: 0 1rem;
  background: ${(props) => props.navBackground};
  transition: 0.5s;

  li {
    padding: 0.4rem;
  }
  .primary-nav {
    display: flex;
    align-items: center;
  }

  .primary-nav ul {
    display: flex;
    align-items: center;
  }

  .logo {
    height: 20px;
  }
  .logo-profile {
    max-width: 30px;
    border-radius: 7px;
  }

  .profile:hover .dropdown {
    display: flex;
  }
  a {
    font-size: 1.3rem;
    text-decoration: none;
    color: var(--colorTxt2);
    transition: color 0.5s;
  }
  a:hover {
    color: var(--colorTxtHover);
  }
  .secundary-nav {
    font-size: 1.3rem;
    position: relative;
  }

  .secundary-nav-list {
    display: flex;
    align-items: center;
  }

  .dropdown {
    display: none;
    padding: 1rem 0.5rem;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.7);
    border: 1px gray solid;
    position: absolute;
    top: 3.5rem;
    right: 5px;
    cursor: pointer;
    width: 150px;
  }

  .dropdown li {
    display: flex;
    align-items: center;
  }
  .dropdown li:hover {
    text-decoration: underline;
  }

  .image-wrapper {
    width: 30px;
    margin-right: 1rem;
  }

  hr {
    border-top: gray solid 1px;
  }

  @media screen and (min-width: 480px) {
    .logo {
      height: 25px;
    }
    .logo-profile {
      max-width: 30px;
      border-radius: 7px;
    }
  }
`;

export const Nav = () => {
  const { profile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [scrollPos, setScrollPos] = useState(0);
  document.addEventListener('scroll', () => {
    setScrollPos(window.scrollY);
  });
  return (
    <NavStyle
      navBackground={
        scrollPos > 10 ? 'var(--colorBgNav2Black)' : 'var(--colorBgNav)'
      }
    >
      <div className="primary-nav">
        <NavLink to="/">
          <img className="logo" src={logoImg} alt="Logo" />
        </NavLink>

        <ul className="menu">
          <li>
            <NavLink exact to="/" activeClassName="nav-active">
              Home
            </NavLink>
          </li>

          {/* <li>
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
          </li> */}

          <li>
            <NavLink to="/mylist" activeClassName="nav-active">
              My List
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="secundary-nav">
        <ul className="secundary-nav-list">
          <li>
            <SearchInput />
          </li>
          {/* <li>
            <AiOutlineGift />
          </li>
          <li>
            <AiFillBell />
          </li> */}
          <li className="profile">
            <NavLink to="/who" activeClassName="nav-active">
              <img
                className="logo-profile"
                src={`../assets/avatar${!profile ? 1 : profile.id}.png`}
                alt="Logo profile"
              />
            </NavLink>

            <ul className="dropdown">
              <ProfileRow />
              <Link to="/who">Manage Profiles</Link>
              <hr />
              {/* eslint-disable */}
            <li onClick={() => dispatch(logoutFromFirebase())}>
              Sign out of Netflix
            </li>
          </ul>
          </li>
        </ul>
      </div>
    </NavStyle>
  );
};
