import React, { useEffect } from 'react';
import axiosInstance from '../components/helpers/axiosInstance';

export const Popular = () => {
  useEffect(() => {
    axiosInstance
      .get('/discover/movie?page=1&with_genres=99')
      .then((response) => console.log(response));
  }, []);
  return (
    <div>
      <p>popular</p>
    </div>
  );
};
