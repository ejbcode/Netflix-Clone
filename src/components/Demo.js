import React, { useEffect, useState } from 'react';
import axiosInstance from './helpers/axiosInstance';

export const Hero = () => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/quote/random')
      .then((resp) => resp.json())
      .then((data) => setState(data));
  }, []);
  const { author } = !!state && state[0];
  console.log(author);
  return (
    <div>
      {/* <img
        src={`https://image.tmdb.org/t/p/original/${media.data.results[8].backdrop_path}`}
        alt=""
      /> */}
    </div>
  );
};
