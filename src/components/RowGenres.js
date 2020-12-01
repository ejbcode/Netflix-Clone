import React, { useEffect } from 'react';
import axiosInstance from './helpers/axiosInstance';

export const RowGenres = (data) => {
  const { title, url } = data.data;
  useEffect(() => {
    axiosInstance(url).then((response) => console.log(response));
  }, []);
  return (
    <div>
      <p>{title}</p>{' '}
    </div>
  );
};
