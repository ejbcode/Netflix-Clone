import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import avatar from '../assets/profile.png';

const WhoStyle = styled.div`
  background: #141414;
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
  border: red solid 1px;
  width: 100%;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const RowStyle = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 800px;
  min-width: 180px;

  border: red solid 1px;

  li {
    max-width: 100px;
    min-width: 80px;
  }
  img {
    border-radius: 0.4rem;
  }
`;

export const Who = () => {
  const { name } = useSelector((state) => state.auth);
  return (
    <WhoStyle>
      <NavLogo>
        <img src={logo} alt="logo" />
      </NavLogo>
      <WhoRow>
        <h1>Who´s watching?</h1>
        <RowStyle>
          <li>
            <div>
              <img src={avatar} alt="logo avatar" />
              <p>{name}</p>
            </div>
          </li>
          <li>
            <img src={avatar} alt="logo avatar" />
            <p>{name}</p>
          </li>
          <li>
            <img src={avatar} alt="logo avatar" />
            <p>{name}</p>
          </li>
          <li>
            <img src={avatar} alt="logo avatar" />
            <p>{name}</p>
          </li>
          <li>
            <img src={avatar} alt="logo avatar" />
            <p>{name}</p>
          </li>
        </RowStyle>
        <button type="submit">MANAGE PROFILE</button>
      </WhoRow>
    </WhoStyle>
  );
};
