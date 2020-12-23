import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axiosInstance from './helpers/axiosInstance';
import { showMedia } from './redux/actions/mediaAction';

const RowsStyle = styled.article`
  margin: 30px 0;
  overflow: hidden;
  padding: 0px 0 20px 30px;
  position: relative;

  h3 {
    padding-bottom: 10px;
  }

  .row-list {
    transition: margin ease 0.2s;
    position: relative;
    white-space: nowrap;
  }
  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 35px;
    width: 40px;
    height: 245px;
    background: linear-gradient(to right, #111 15%, transparent 90%);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.3s;
  }

  .row-item {
    display: inline-block;
    width: 160px;
    cursor: pointer;
    transition: all 0.3s;
    margin-right: 10px;
  }

  .row-item img {
    width: 100%;
    border-radius: 0.6rem;
    transition: transform ease 0.3s;
  }

  .row-item img:hover {
    transform: scale(1.25);
  }

  .arrow-left {
    left: 0;
  }

  .arrow-right {
    background: linear-gradient(to left, #111 15%, transparent 90%);
    right: 0;
  }

  :hover .arrow-left,
  :hover .arrow-right {
    transform: scaleY(1.22);
    opacity: 1;
  }
`;

export const RowGenres2 = (data) => {
  const dispatch = useDispatch();
  const openModal = (event) => {
    event.preventDefault();
    dispatch(showMedia());
  };
  const [media, setMedia] = useState(null);
  const [scrollX, setScrollX] = useState(0);

  const { titleSection, url } = data.data;
  useEffect(() => {
    axiosInstance(url).then((response) => setMedia(response.data.results));
  }, [url]);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth);
    const listW = media?.length * 170;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }

    setScrollX(x);
  };

  return (
    <RowsStyle>
      <h3>{titleSection}</h3>

      <div
        className="row-list"
        style={{
          marginLeft: scrollX,
          // width: media?.length * 190,
        }}
      >
        {media?.map((item) => (
          <div className="row-item" key={item.id} aria-hidden="true">
            <div onClick={openModal} aria-hidden="true">
              <img
                src={`https://image.tmdb.org/t/p/w154/${item.poster_path}`}
                alt="movie poster"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="arrow-left" onClick={handleLeftArrow} aria-hidden="true">
        {scrollX === 0 ? null : <FaChevronLeft style={{ fontSize: 30 }} />}
      </div>
      <div
        className="arrow-right"
        onClick={handleRightArrow}
        aria-hidden="true"
      >
        {scrollX < window.innerWidth - media?.length * 160 ? null : (
          <FaChevronRight style={{ fontSize: 30 }} />
        )}
      </div>
    </RowsStyle>
  );
};
