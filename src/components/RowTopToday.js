import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axiosInstance from './helpers/axiosInstance';
import { showDetail } from './redux/actions/mediaAction';

const RowsStyle = styled.article`
  margin: 30px 0;
  overflow: hidden;
  padding: 0px 0 20px 30px;
  position: relative;

  .row-list {
    transition: margin ease 0.2s;
    position: relative;
    white-space: nowrap;
  }

  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 27px;
    width: 40px;
    height: 140px;
    background: linear-gradient(to right, #111 15%, transparent 90%);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 1;
    transition: all ease 0.3s;
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
    transform: scaleY(1.24);
    opacity: 1;
  }

  @media screen and (min-width: 786px) {
    .arrow-left,
    .arrow-right {
      opacity: 0;
    }
  }
`;

const MovieItemStyle = styled.div`
  display: inline-block;
  cursor: pointer;
  position: relative;
  z-index: 100;
  margin-left: 90px;
  transition: all ease 0.3s;

  :after {
    content: '${(props) => props.count}';
    position: absolute;
    z-index: -10;
    top: 0;
    left: -81%;
    color: #000;
    font-size: 18.5rem;
    font-weight: 900;
    line-height: 128px;
    -webkit-text-stroke: 4px #595959;
  }

  img {
    width: 100%;
    border-radius: 1rem;
    border-radius: 0 1rem 1rem 0;
  }

  :hover {
    transform: scale(1.25);
  }
`;

export const RowTopToday = (data) => {
  const dispatch = useDispatch();
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
    let x = scrollX - Math.round(window.innerWidth / 2);
    const listW = media?.length * 170;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }

    setScrollX(x);
  };

  const handleClick = (value) => {
    dispatch(showDetail(value));
  };
  /* eslint-disable */

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
        {media?.slice(0, 9).map((item, count) => (
          <MovieItemStyle count={count + 1}  key={item.id} onClick={()=>handleClick(item.id)}>
            <img
              src={`https://image.tmdb.org/t/p/w92/${item.poster_path}`}
              alt=""
            />
          </MovieItemStyle>
        ))}
      </div>
      <div className="arrow-left" onClick={handleLeftArrow}>
        {scrollX == 0 ? null : <FaChevronLeft style={{ fontSize: 30 }} />}
      </div>
      <div className="arrow-right" onClick={handleRightArrow}>
        {scrollX < window.innerWidth - media?.length * 100 ? null : (
          <FaChevronRight style={{ fontSize: 30 }} />
        )}
      </div>
    </RowsStyle>
  );
};
