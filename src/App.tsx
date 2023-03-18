import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [film, findFilm] = useState('');

  const moviesFilter = moviesFromServer.filter((movie) => {
    const { description, title } = movie;
    const searchValue = film.toLowerCase().trim();

    return description.toLowerCase().includes(searchValue)
    || title.toLowerCase().includes(searchValue);
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
                className="input"
                placeholder="Type search word"
                value={film}
                onChange={(event) => findFilm(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesFilter} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
