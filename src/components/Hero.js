import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axiosInstance from './helpers/axiosInstance';

const BackdropContainer = styled.div`
  position: absolute;
  z-index: -100;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: auto;
  border: green solid 1px;
  width: 100%;

  background-image: linear-gradient(to right, #111 1%, transparent 70%),
    linear-gradient(to top, #111 1%, transparent 30%),
    url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  .media-info {
    border: red solid 1px;
    height: 55vh;
    min-height: 300px;
  }
`;

export const Hero = (data) => {
  const { titleSection, url } = data.data;
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axiosInstance(url).then((response) => setMedia(response.data.results));
  }, [url]);

  const randowMedia = Math.floor(Math.random() * 20);
  /* eslint-disable */
  const { backdrop_path, title, name, overview } = !!media && media[randowMedia];
  console.log(media);
  
  const bg = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  {
    /* eslint-enable */
  }
  return (
    <BackdropContainer bg={bg}>
      <div className="media-info">
        <div className="title">
          <h2>{title || name}kj</h2>
          <p>{overview}</p>
        </div>
      </div>

      {/* <pre>{JSON.stringify(media, null, 4)}</pre> */}
    </BackdropContainer>
  );
};
