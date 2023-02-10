import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="card">
      <div className="card-content">
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
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesFromServer} query={query} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
