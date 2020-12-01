import React from 'react';
import { RowGenres } from '../components/RowGenres';
import { genresList } from '../components/genresList';

export const Main = () => (
  <div>
    <RowGenres data={genresList.netflixs} />

    <p>treding</p>
    <p>drama</p>
    <p>action</p>
  </div>
);
