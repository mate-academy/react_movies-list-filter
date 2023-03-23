import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = () => {
    const trimmedQuery = query.trim();
    const queryToLowerCase = trimmedQuery.toLowerCase();

    return moviesFromServer.filter(({ title, description }) => {
      const titleToLowerCase = title.toLowerCase();
      const descriptionToLowerCase = description.toLowerCase();

      return (
        titleToLowerCase.includes(queryToLowerCase)
        || descriptionToLowerCase.includes(queryToLowerCase)
      );
    });
  };

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
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies()} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
