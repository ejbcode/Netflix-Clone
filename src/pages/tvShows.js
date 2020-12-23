import React from 'react';
import { useSelector } from 'react-redux';
import { RowGenres } from '../components/RowGenres';
import { genresList } from '../components/genresList';
import { RowGenres2 } from '../components/RowGenres4';
import MediaDetail from '../components/MediaDetail';
import Loader from '../components/Loader';

export const TvShows = () => {
  const { id, isModalOpened } = useSelector((state) => state.media);
  return (
    <div>
      <h2>Tv Shows</h2>
      <Loader />
      <RowGenres2 data={genresList.action} />
      {isModalOpened && <MediaDetail id={id} />}

      <RowGenres data={genresList.netflix} />
      <RowGenres data={genresList.documentary} />
      <RowGenres data={genresList.action} />
      <RowGenres2 data={genresList.topRated} />
    </div>
  );
};
