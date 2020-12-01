import React, { useEffect } from 'react';
import axiosInstance from './helpers/axiosInstance';

export const RowGenres = ({ data }) => {
  console.log(url);
  useEffect(() => {
    axiosInstance(url).then((response) => console.log(response));
  }, []);
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};
