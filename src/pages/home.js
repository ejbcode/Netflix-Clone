import React from 'react';
import { useSelector } from 'react-redux';
import { genresList } from '../components/genresList';
import { Hero } from '../components/Hero';
import MediaDetail from '../components/MediaDetail';
import { RowGenres2 } from '../components/RowGenres4';
import { RowTopToday } from '../components/RowTopToday';

export const Home = () => {
  const { id, isModalOpened } = useSelector((state) => state.media);

  return (
    <div>
      <h2>Home</h2>
      <Hero data={genresList.heroAll} />
      {isModalOpened && <MediaDetail id={id} />}

      <RowGenres2 data={genresList.netflix} />
      <RowGenres2 data={genresList.action} />
      <RowTopToday data={genresList.topPopular} />
      <RowGenres2 data={genresList.horror} />
      <RowGenres2 data={genresList.comedy} />
    </div>
  );
};
