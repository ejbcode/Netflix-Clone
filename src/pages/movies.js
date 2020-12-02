import React from 'react';
import { RowGenres } from '../components/RowGenres';
import { genresList } from '../components/genresList';

export const Movies = () => (
  <div>
    <h2>Movies</h2>
    <RowGenres data={genresList.netflix} />
    <RowGenres data={genresList.documentary} />
    <RowGenres data={genresList.action} />
    <RowGenres data={genresList.topRated} />
  </div>
);
