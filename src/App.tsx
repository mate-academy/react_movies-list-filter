import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const changeQueryText = ((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setQuery(() => value);
  });

  const getUpperCase = ((word: string) => word.toUpperCase());

  const getFilteredMovies = () => {
    return moviesFromServer.filter(movie => {
      const queryUpperCase = getUpperCase(query).trim();

      return getUpperCase(movie.description).includes(queryUpperCase)
      || getUpperCase(movie.title).includes(queryUpperCase);
    });
  };

  const visibleMovies = getFilteredMovies();

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
                onChange={changeQueryText}
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
