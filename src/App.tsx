import React, { useState, useMemo, ChangeEvent } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

import './App.scss';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const queryLowerCase = useMemo(() => query.toLowerCase().trim(), [query]);

  const visibleMovies = useMemo(() => {
    if (query) {
      // eslint-disable-next-line max-len
      return moviesFromServer.filter(({ title, description }) => title.toLowerCase().includes(queryLowerCase)
        || description.toLowerCase().includes(queryLowerCase));
    }

    return moviesFromServer;
  }, [query, queryLowerCase]);

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
                onChange={handleChange}
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
