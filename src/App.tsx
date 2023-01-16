import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setValue] = useState('');

  const finalQuery = query.trim().toLocaleLowerCase();
  const filteredMovies = moviesFromServer.filter(movie => (
    (movie.title + movie.description).includes(finalQuery)));

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
                onChange={(event) => {
                  setValue(event.target.value);
                }}
              />
            </div>
          </div>
          <MoviesList movies={filteredMovies} />
        </div>
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
