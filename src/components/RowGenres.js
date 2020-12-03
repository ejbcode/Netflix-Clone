import React, { useEffect, useState } from 'react';
import axiosInstance from './helpers/axiosInstance';

export const RowGenres = (data) => {
  const [media, setMedia] = useState(null);

  const { title, url } = data.data;
  useEffect(() => {
    axiosInstance(url).then((response) => setMedia(response.data.results));
  }, [url]);
  console.log(media);
  return (
    <div>
      {media.map((item) => (
        <div key={item.id}>
          <p>{item.title || item.name}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt=""
          />
        </div>
      ))}
      <p>{title}</p>
    </div>
  );
};
