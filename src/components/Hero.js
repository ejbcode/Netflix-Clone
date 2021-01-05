import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axiosInstance from './helpers/axiosInstance';
import { showDetail } from './redux/actions/mediaAction';

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
  margin-bottom: -6rem;

  .wrapper {
    position: relative;
    min-height: 100px;
    padding-bottom: 55%;
    overflow: hidden;
  }
  .description {
    z-index: 10;
    width: 60%;
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
    font-size: 3.6vw;
  }
  p {
    font-size: 1.8vw;
  }

  .buttons {
    margin-top: 2rem;
    display: flex;
    position: relative;
    align-items: center;
  }

  .button-play,
  .button-more {
    font-weight: bold;
    font-size: 25%;
    padding: 1rem 2rem;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 1rem;
    opacity: 1;
    transition: all ease 0.2s;
    cursor: pointer;
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

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 2.6vw;
    }
    p {
      font-size: 1.4vw;
    }

    .button-play,
    .button-more {
      font-size: 1vw;
    }
    .wrapper {
      padding-bottom: 45%;
    }
  }
`;

export const Hero = (data) => {
  const { url } = data.data;
  const [media, setMedia] = useState(null);
  const [randomMedia, setRandomMedia] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance(url).then((response) => setMedia(response.data.results));
    setRandomMedia(Math.floor(Math.random() * 20));
  }, [url]);

  /* eslint-disable */
  const { backdrop_path, title, name, overview, id } = !!media && media[randomMedia];

  const bg = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  
    /* eslint-enable */
 

  return (
    <HeroStyle bg={bg}>
      <div className="wrapper">
        <div className="image-wrapper">
          <img src={bg} alt="" />
        </div>
        <div className="description">
          <h2>{title}</h2>
          <p>{overview?.slice(0, 200)}</p>
          <div
            className="buttons"
            onClick={() => dispatch(showDetail(id))}
            aria-hidden
          >
            <div className="button-play">► Play</div>
            <div className="button-more">+ More Info</div>
          </div>
        </div>
      </div>
    </HeroStyle>
  );
};
