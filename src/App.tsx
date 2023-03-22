import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const moviesFilter = moviesFromServer.filter(({ description, title }) => {
    const searchValue = query.toLowerCase().trim();

    return description.toLowerCase().includes(searchValue)
    || title.toLowerCase().includes(searchValue);
  });

  const handleSetFilm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
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
                onChange={handleSetFilm}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={moviesFilter} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
