import React, { useState, useCallback } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const visibleMovies = moviesFromServer.filter((movie) => {
    const lowercaseQuery = query.toLowerCase().trim();
    const lowercaseTitle = movie.title.toLowerCase();
    const lowercaseDescription = movie.description.toLowerCase();

    return lowercaseTitle.includes(lowercaseQuery)
    || lowercaseDescription.includes(lowercaseQuery);
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
                value={query}
                onChange={handleQueryChange}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
