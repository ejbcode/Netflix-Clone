import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axiosInstance from './helpers/axiosInstance';

const BackdropContainer = styled.div`
  position: absolute;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border: red solid 2px;
`;

export const Hero = (data) => {
  const { titleSection, url } = data.data;
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axiosInstance(url).then((response) => setMedia(response.data.results));
  }, [url]);

  const randowMedia = Math.floor(Math.random() * 20);
  console.log(randowMedia);
  /* eslint-disable */
  const { backdrop_path, title, name, overview } = !!media && media[randowMedia];
  console.log(backdrop_path, title, );
  console.log(media);
  return (
    <BackdropContainer>
      <div className="backDrop"
      > <img
      src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
      alt=""
    /></div>
      <h2>{title || name}</h2>
  <p>{overview}</p>

     


      {/* <pre>{JSON.stringify(media, null, 4)}</pre> */}
    </BackdropContainer>
  );
};
