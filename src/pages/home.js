import React from 'react';
import { genresList } from '../components/genresList';
import { Hero } from '../components/Hero';
import { RowGenres } from '../components/RowGenres';

export const Home = () => (
  <div>
    <h2>Home</h2>
    <Hero data={genresList.heroAll} />
    <RowGenres data={genresList.netflix} />
  </div>
);
