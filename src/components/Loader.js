import React from 'react';
import styled from 'styled-components';

const LoaderStyle = styled.div`
  position: relative;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  z-index: 1000000;
  pointer-events: none;
  .nfLoader {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 37px 0 0 -25px;
    width: 50px;
    height: 50px;
  }
  .nfLoader:after {
    content: '';
    background-image: url('https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png');
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
    position: absolute;
    margin: -6px;
    width: inherit;
    height: inherit;
    animation: nfLoader-spin 1.1s linear infinite, 1 !important;
  }
  @keyframes nfLoader-spin {
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes nfLoader-spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const Loader = () => (
  <LoaderStyle>
    <div id="loader" className="nfLoader" />
  </LoaderStyle>
);

export default Loader;
