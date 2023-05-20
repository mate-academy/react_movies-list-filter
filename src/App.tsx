import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const normalizeValue = (value: string) => {
    return value.toLowerCase();
  };

  const visibleMovies = moviesFromServer.filter(({ title, description }) => {
    const normalizedQuery = normalizeValue(query.trim());
    const normalizedTitle = normalizeValue(title);
    const normalizedDescription = normalizeValue(description);

    if (normalizedTitle.includes(normalizedQuery)) {
      return true;
    }

    if (normalizedDescription.includes(normalizedQuery)) {
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
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
