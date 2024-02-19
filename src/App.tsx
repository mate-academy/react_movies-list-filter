import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = moviesFromServer.filter(movie => {
    const movieTitle = movie.title.toLowerCase();
    const movieDescription = movie.description.toLocaleLowerCase();
    const inputToLower = query.toLocaleLowerCase().trim();

    if (movieTitle.includes(inputToLower)
    || movieDescription.includes(inputToLower)) {
      return true;
    }

    return false;
  });

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
                value={query}
                onChange={event => {
                  setQuery((event.target.value));
                }}
                className="input"
                placeholder="Type search word"
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
