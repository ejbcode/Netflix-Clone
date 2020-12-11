import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineSearch, AiOutlineGift, AiFillBell } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import logoImg from '../assets/logo.png';
import profileImg from '../assets/profile.png';
import { logoutFromFirebase } from './redux/actions/authAction';

const NavStyle = styled.nav`
  --colorBgNav: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  --colorBgNav2Black: #141414;

  z-index: 10;
  position: fixed;
  right: 0;
  left: 0;

  font-size: 1rem;
  padding: 0 4rem;
  background: ${(props) => props.navBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
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
    font-size: 1.3rem;
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

export const Nav = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(0);
  document.addEventListener('scroll', () => {
    setState(window.scrollY);
  });
  return (
    <NavStyle
      navBackground={
        state > 10 ? 'var(--colorBgNav2Black)' : 'var(--colorBgNav)'
      }
    >
      <div className="primary-nav">
        <img className="logo" src={logoImg} alt="Logo" />

        <ul>
          <li>
            <NavLink exact to="/app/" activeClassName="nav-active">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/app/tvshows" activeClassName="nav-active">
              Tv Shows
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/movies" activeClassName="nav-active">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/popular" activeClassName="nav-active">
              New & Popular
            </NavLink>
          </li>

          <li>
            <NavLink to="/app/mylist" activeClassName="nav-active">
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
          <button
            type="button"
            aria-label="save"
            onClick={() => dispatch(logoutFromFirebase())}
          />
        </ul>
      </div>
    </NavStyle>
  );
};
