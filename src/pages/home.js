import React from 'react';
import { genresList } from '../components/genresList';
import { Hero } from '../components/Hero';

export const Home = () => (
  <div>
    <h2>Home</h2>
    <Hero data={genresList.heroAll} />
  </div>
);
