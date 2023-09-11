import React, { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const updateQuery: React.ChangeEventHandler<HTMLInputElement> = e => {
    setQuery(e.target.value);
  };

  const visibleMovies = moviesFromServer.filter((movie) => {
    return movie.description.toUpperCase().includes(query.toUpperCase().trim())
      || movie.title.toUpperCase().includes(query.toUpperCase().trim());
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
                value={query}
                onChange={updateQuery}
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
