import React from 'react';
import { RowGenres } from '../components/RowGenres';
import { genresList } from '../components/genresList';

export const TvShows = () => (
  <div>
    <h2>Tv Shows</h2>
    <RowGenres data={genresList.netflix} />
    <RowGenres data={genresList.documentary} />
    <RowGenres data={genresList.action} />
    <RowGenres data={genresList.topRated} />
  </div>
);
