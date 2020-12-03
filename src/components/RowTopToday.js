import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axiosInstance from './helpers/axiosInstance';

const RowsStyle = styled.article`
  position: relative;
  padding-left: 30px;
  overflow-x: hidden;
  overflow-y: hidden;

  .movieRow--list {
    white-space: nowrap;
  }
`;

const MovieItemStyle = styled.div`
  display: inline-block;

  cursor: pointer;
  position: relative;
  z-index: 100;
  margin-left: 90px;

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
`;

export const RowTopToday = (data) => {
  const [media, setMedia] = useState(null);

  const { titleSection, url } = data.data;
  useEffect(() => {
    axiosInstance(url).then((response) => setMedia(response.data.results));
  }, [url]);
  console.log(media);
  return (
    <RowsStyle>
      <h3>{titleSection}</h3>
      <div
        className="movieRow--list"
        style={{
          marginLeft: 0,
        }}
      >
        {media?.slice(0, 9).map((item, count) => (
          <MovieItemStyle count={count + 1} aqui="red" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w92/${item.poster_path}`}
              alt=""
            />
          </MovieItemStyle>
        ))}
      </div>
    </RowsStyle>
  );
};
