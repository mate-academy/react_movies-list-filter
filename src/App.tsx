/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [filteredMovies, setFilteredMovies] = useState(moviesFromServer);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const visibleMovies = moviesFromServer
      .filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

    setFilteredMovies(visibleMovies);
  }, [query]);

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
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
