import React, { useEffect } from 'react';
import axiosInstance from '../components/helpers/axiosInstance';

export const Popular = () => {
  useEffect(() => {
    // fetch(
    //   'https://api.themoviedb.org/3/movie/550?api_key=9b37dd48836cf81a853e4b061a8f4b6c'
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
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
