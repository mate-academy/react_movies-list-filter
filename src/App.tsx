import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const normalizeString = (str: any) => {
  return str.toLowerCase().replace(/\s+/g, ' ').trim();
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter((movie) => {
    const normalizedQuery = normalizeString(query);
    const normalizedTitle = normalizeString(movie.title);
    const normalizedDescription = normalizeString(movie.description);

    return (
      normalizedTitle.includes(normalizedQuery) ||
      normalizedDescription.includes(normalizedQuery)
    );
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(e) => setQuery(e.target.value)}
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
