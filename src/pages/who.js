import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { ProfileRow } from '../components/ProfileRow';

const WhoStyle = styled.div`
  background: #141414;
  z-index: 1000;
  position: relative;
  height: 100vh;
`;

const NavLogo = styled.nav`
  margin: 2rem;
`;
const WhoRow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;

  h1 {
    margin-bottom: 2rem;
  }

  .profile-row {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    min-width: 280px;

    p {
      margin: 0;
    }

    li {
      width: 80px;
      margin: 0 10px 2rem 10px;
      color: gray;
      cursor: pointer;

      :hover img {
        outline: 4px solid lightgray;
        outline-offset: -4px;
      }
      :hover p {
        color: white;
      }
    }
    img {
      border-radius: 0.4rem;
      overflow: hidden;
    }
    @media screen and (min-width: 480px) {
      li {
        width: 130px;
      }
    }
  }
`;

const ButtonStyle = styled.button`
  --ccc: lightgray;
  color: var(--ccc);
  margin-top: 3rem;
  text-align: center;
  background: transparent;
  border: 1px solid var(--ccc);
  padding: 0.9rem 2.3rem;
  border-radius: initial;
  :hover {
    --ccc: white;
  }
`;

export const Who = () => (
  <WhoStyle>
    <NavLogo>
      <img src={logo} alt="logo" />
    </NavLogo>
    <WhoRow>
      <h1>Who´s watching?</h1>
      <ul>
        <ProfileRow />
      </ul>
      <ButtonStyle type="submit">MANAGE PROFILES</ButtonStyle>
    </WhoRow>
  </WhoStyle>
);
