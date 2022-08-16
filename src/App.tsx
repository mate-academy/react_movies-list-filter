import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const isQueryIncluded = (field: string) => (
    field.toLowerCase().includes(query.toLowerCase().trim())
  );

  const getVisibleMovies = () => {
    return moviesFromServer.filter(
      movie => (isQueryIncluded(movie.title)
        || isQueryIncluded(movie.description)),
    );
  };

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
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={getVisibleMovies()} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
