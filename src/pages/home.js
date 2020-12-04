import React from 'react';
import { genresList } from '../components/genresList';
import { Hero } from '../components/Hero';
import { RowGenres } from '../components/RowGenres';
import { RowGenres2 } from '../components/RowGenres2';
import { RowTopToday } from '../components/RowTopToday';

export const Home = () => (
  <div>
    <h2>Home</h2>
    <Hero data={genresList.heroAll} />
    <RowGenres data={genresList.netflix} />
    <RowGenres2 data={genresList.netflix} />

    <RowTopToday data={genresList.topPopular} />
  </div>
);
