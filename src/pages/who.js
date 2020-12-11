import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import avatar from '../assets/profile.png';

const WhoStyle = styled.div`
  background: blue;
  z-index: 10;
  position: relative;
  height: 100vh;
`;

const NavLogo = styled.nav``;
const WhoRow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RowStyle = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Who = ({ userName = 'Name' }) => (
  <WhoStyle>
    <NavLogo>
      <img src={logo} alt="logo" />
    </NavLogo>
    <WhoRow>
      <h1>Who´s watching?</h1>
      <RowStyle>
        <li>
          <img src={avatar} alt="logo avatar" />
          <p>{userName}</p>
        </li>
        <li>
          <img src={avatar} alt="logo avatar" />
          <p>{userName}</p>
        </li>
        <li>
          <img src={avatar} alt="logo avatar" />
          <p>{userName}</p>
        </li>
        <li>
          <img src={avatar} alt="logo avatar" />
          <p>{userName}</p>
        </li>
        <li>
          <img src={avatar} alt="logo avatar" />
          <p>{userName}</p>
        </li>
      </RowStyle>
    </WhoRow>
  </WhoStyle>
);
