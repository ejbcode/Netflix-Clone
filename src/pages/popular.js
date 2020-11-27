import React, { useEffect } from 'react';
import axiosClient from '../components/helpers/axiosClient';

export const Popular = () => {
  useEffect(() => {
    // fetch(
    //   'https://api.themoviedb.org/3/movie/550?api_key=9b37dd48836cf81a853e4b061a8f4b6c'
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    axiosClient.get(baseURL);
  }, []);
  return (
    <div>
      <p>popular</p>
    </div>
  );
};
