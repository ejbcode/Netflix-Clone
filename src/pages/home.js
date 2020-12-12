import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { genresList } from '../components/genresList';
import { Hero } from '../components/Hero';
import { RowGenres2 } from '../components/RowGenres2';
import { RowTopToday } from '../components/RowTopToday';

export const Home = () => {
  const { redirectToWho } = useSelector((state) => state.auth);
  console.log(redirectToWho);
  const history = useHistory();
  if (redirectToWho) {
    history.push('/app/who');
    return <p>fd</p>;
  }
  return (
    <div>
      <h2>Home</h2>
      <Hero data={genresList.heroAll} />
      <RowGenres2 data={genresList.netflix} />
      <RowGenres2 data={genresList.action} />
      <RowTopToday data={genresList.topPopular} />
      <RowGenres2 data={genresList.horror} />
      <RowGenres2 data={genresList.comedy} />
    </div>
  );
};
