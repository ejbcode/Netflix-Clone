import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axiosInstance from './helpers/axiosInstance';

const RowsStyle = styled.article`
  position: relative;
  overflow-x: hidden;
  padding-left: 30px;

  .movieRow--list {
    white-space: nowrap;
  }

  .movieRow--item {
    display: inline-block;
    cursor: pointer;
    margin-right: 2rem;
  }

  .movieRow--item img {
    width: 100%;
    border-radius: 1rem;
  }
`;

export const RowGenres = (data) => {
  const [media, setMedia] = useState(null);

  const { titleSection, url } = data.data;
  useEffect(() => {
    axiosInstance(url).then((response) => setMedia(response.data.results));
  }, [url]);
  return (
    <RowsStyle>
      <h3>{titleSection}</h3>
      <div
        className="movieRow--list"
        style={{
          marginLeft: 0,
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
    </RowsStyle>
  );
};
