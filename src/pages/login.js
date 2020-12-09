import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import loginBg from '../assets/loginBG.jpg';
import logoImg from '../assets/logo.png';
import logoGoogle from '../assets/logogoogle.png';
import {
  logoutFromFirebase,
  logWithGoogle,
} from '../components/redux/actions/authAction';

const LoginStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: center center;
  background: linear-gradient(
      rgba(20, 20, 20, 0.7) 0%,
      rgba(20, 20, 20, 0.7) 100%
    ),
    url(${loginBg});

  background-size: cover;
  display: flex;
  flex-direction: column;
  .logo {
    margin: 1.2rem;
  }

  .login {
    margin: 0 auto;
    min-width: 400px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 0.8rem;
    padding: 6rem 6rem 10rem;
    min-height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: #fff;
  }
  .group {
    position: relative;
    z-index: 10;
    display: -webkit-box;
    display: flex;
  }
  .group__label {
    position: absolute;
    z-index: 150;
    color: #b3b3b3;
    font-size: 1.3rem;
    top: 20%;
    left: 18px;
    transition: all 300ms ease-in;
    pointer-events: none;
  }
  .group__input {
    width: 100%;
    position: relative;
    z-index: 100;
    background: #333;
    margin-bottom: 20px;
    border-radius: 4px;
    border: none;
    opacity: 1;
    font-size: 1.5rem;
    color: #fff;
    line-height: 2.2;
    padding: 12px 18px 0;
  }
  .group__input:focus + .group__label,
  .group__input:valid + .group__label {
    top: 0.5rem;

    font-size: 0.8rem;
  }
  button {
    margin: 24px 0 12px;
    padding: 16px;
    color: #fff;
    background: #e50914;
    font-size: 1.3rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .cta__text {
    font-size: 1.3rem;
    color: #b3b3b3;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .cta__text--need-help {
    transition: all 0.3s ease-in;
  }
  .cta__text--need-help:hover {
    text-decoration: underline;
  }

  .logo-google {
    width: 20px;
    margin-right: 1rem;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }
  span {
    font-weight: 700;
  }
`;

/* eslint-disable */

export const Login = () => {
  // const { formValues, handleInputChange } = useForm({
  //   email: '',
  //   password: '',
  // });
  const { name } = useSelector((state) => state.auth);
  console.log(name);
  const dispatch = useDispatch();

  const handleGoogleClick = () => {
    dispatch(logWithGoogle());
  };

  return (
    <>
      <LoginStyle>
        <div className="logo">
          <img src={logoImg} alt="" />
        </div>
        <form className="login">
          <h1>{name}</h1>
          <h2 className="title">Sign In</h2>
          <div className="group">
            <input id="email" className="group__input" type="text" required />
            <label htmlFor="email" className="group__label">
              Email or phone number
            </label>
          </div>
          <div className="group">
            <input
              className="group__input"
              type="password"
              required
              id="password"
            />
            <label htmlFor="password" className="group__label">
              Password
            </label>
          </div>
          <button type="submit">Sign In</button>
          <div className="cta">
            <a className="cta__text" href="#">
              Remember me
            </a>
            <a className="cta__text cta__text--need-help" href="#">
              Need help?
            </a>
          </div>
          <div className="cta">
            <a className="cta__text" href="#" onClick={handleGoogleClick}>
              <img className="logo-google" src={logoGoogle} alt="" />{' '}
              <p> Login with Google</p>
            </a>
          </div>
          <p>
            New to Netflix?
            <span>
              <Link>Sign up now. </Link>
            </span>
          </p>
        </form>
      </LoginStyle>
    </>
  );
};
