import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';

export const findVisibleMovies = (movies: Movie[], query: string): Movie[] => {
  return movies.filter(movie => {
    const { description, title } = movie;

    return description.toLocaleLowerCase()
      .includes(query.toLocaleLowerCase())
    || title.toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
  });
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = findVisibleMovies(moviesFromServer, query);

  const hendleChangeQuery = ((event: React.ChangeEvent<HTMLInputElement>) => (
    setQuery(event.target.value)));

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={hendleChangeQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
