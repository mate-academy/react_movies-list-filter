import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [filmName, setFilmName] = useState('');

  const visibleMovies = moviesFromServer.filter((movie) => {
    const { title, description } = movie;

    const movieInfo = `${title} ${description}`.toLowerCase();
    const normalizedFilmName = filmName
      .toLowerCase()
      .split(' ')
      .filter(Boolean)
      .join(' ');

    return movieInfo.includes(normalizedFilmName);
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
                value={filmName}
                onChange={(event) => {
                  setFilmName(event.target.value);
                }}
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
