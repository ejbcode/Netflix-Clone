import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';
import axiosInstance from './helpers/axiosInstance';

const RowsStyle = styled.article`
  margin-bottom: 30px;

  .movieRow--listarea {
    overflow-x: hidden;
    padding-left: 30px;
    transition: all 0.3s;
    -webkit-animation: showGridCategorie 2.5s ease-in-out;
    animation: showGridCategorie 2.5s ease-in-out;
  }

  .movieRow--list {
    transition: all ease 0.2s;
    transition: all 0.3s;
    -webkit-animation: showGridCategorie 2.5s ease-in-out;
    animation: showGridCategorie 2.5s ease-in-out;
  }

  .movieRow--item {
    display: inline-block;
    width: 150px;
    cursor: pointer;
    transition: all 0.3s;
    -webkit-animation: showGridCategorie 2.5s ease-in-out;
    animation: showGridCategorie 2.5s ease-in-out;
  }
  @keyframes showGridCategorie {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }

    80% {
      opacity: 0.5;
      transform: translateX(5%);
    }

    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  .movieRow--item img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
    transition: all 0.3s;
    -webkit-animation: showGridCategorie 0.5s ease-in-out;
    animation: showGridCategorie 0.5s ease-in-out;
  }

  .movieRow--item img:hover {
    transform: scale(1);
  }

  .movieRow-left,
  .movieRow-right {
    position: absolute;
    width: 40px;
    height: 225px;
    background: linear-gradient(to right, #111 15%, transparent 90%);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.2s;
  }

  .movieRow-left {
    left: 0;
  }

  .movieRow-right {
    background: linear-gradient(to left, #111 15%, transparent 90%);
    right: 0;
  }

  :hover .movieRow-left,
  :hover .movieRow-right {
    opacity: 1;
  }
`;

export const RowGenres2 = (data) => {
  const [media, setMedia] = useState(null);
  const [scrollX, setScrollX] = useState(0);

  const { titleSection, url } = data.data;
  useEffect(() => {
    axiosInstance(url).then((response) => setMedia(response.data.results));
  }, [url]);
  console.log(media);

  const handleLeftArrow = () => {
    console.log('left');

    let x = scrollX + Math.round(window.innerWidth);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    console.log('right');
    let x = scrollX - Math.round(window.innerWidth);
    const listW = media.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };
  /* eslint-disable */

  return (
    <RowsStyle>
        <h3>{titleSection}</h3>
      <div className="movieRow-left" onClick={handleLeftArrow}>
        <AiOutlineArrowLeft style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow-right" onClick={handleRightArrow}>
        <AiOutlineArrowRight style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft :scrollX,
            width: media?.length * 150
          }}
        >
          {media?.map((item) => (
            <div className="movieRow--item" key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w154/${item.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </RowsStyle>
  );
};
