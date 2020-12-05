import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axiosInstance from './helpers/axiosInstance';

const HeroStyle = styled.div`
  position: relative;
  margin-top: -35px;
  z-index: -100;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 0;
  margin-bottom: -20px;

  .wrapper {
    position: relative;
    min-height: 100px;
    padding-bottom: 45%;
    overflow: hidden;
  }
  .description {
    z-index: 10;
    width: 40%;
    position: absolute;
    top: 25%;
    left: 2%;
    right: 0;
    bottom: 0;
  }

  .image-wrapper {
    position: absolute;
  }

  .wrapper::after {
    z-index: 1;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(
        0deg,
        rgba(20, 20, 20, 1) 0%,
        rgba(20, 20, 20, 0) 17%
      ),
      linear-gradient(to right, #111 1%, transparent 70%),
      linear-gradient(to top, #111 1%, transparent 30%);
  }
  h2 {
    font-size: 2.6vw;
  }
  p {
    font-size: 1.4vw;
  }

  .buttons {
    margin-top: 2rem;
  }

  .button-play,
  .button-more {
    font-weight: bold;
    font-size: 1vw;
    padding: 1rem 2rem;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 1rem;
    opacity: 1;
    transition: all ease 0.2s;
  }

  .button-more:hover,
  .button-play:hover {
    opacity: 0.7;
  }
  .button-play {
    background-color: #fff;
    color: #000;
  }

  .button-more {
    background-color: #333;
    color: #fff;
  }
`;

export const Hero = (data) => {
  const { titleSection, url } = data.data;
  const [media, setMedia] = useState(null);

  useEffect(() => {
    axiosInstance(url).then((response) => setMedia(response.data.results));
  }, [url]);

  const randowMedia = Math.floor(Math.random() * 20);
  /* eslint-disable */
  const { backdrop_path, title, name, overview } = !!media && media[randowMedia];

  const bg = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  {
    /* eslint-enable */
  }
  return (
    <HeroStyle bg={bg}>
      <div className="wrapper">
        <div className="image-wrapper">
          <img src={bg} alt="" />
          ss
        </div>
        <div className="description">
          <h2>{title}</h2>
          <p>{overview?.slice(0, 200)}</p>
          <div className="buttons">
            <a href="/" className="button-play">
              ► Play
            </a>
            <a href="/" className="button-more">
              + More Info
            </a>
          </div>
        </div>
      </div>
    </HeroStyle>
  );
};
