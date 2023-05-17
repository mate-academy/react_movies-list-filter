import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  let visibleMovies = moviesFromServer;

  const trimmedQuery = query.trim().replace(/\s+/g, ' ');

  if (trimmedQuery) {
    visibleMovies = visibleMovies.filter((movie) => {
      const lowerQuery = trimmedQuery.toLowerCase();

      const names = `
       ${movie.title}
       ${movie.description || ''}
      `.toLowerCase();

      return names.includes(lowerQuery);
    });
  }

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
                onChange={(e) => setQuery(e.target.value)}
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
