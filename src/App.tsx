import React, { useState, useMemo } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const isContaining = (value: string, query: string) => (
  value.toLowerCase().includes(query.toLowerCase())
);

const filterMovies = (query: string) => {
  return moviesFromServer.filter(({ title, description }) => {
    return isContaining(title, query) || isContaining(description, query);
  });
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSetValue = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(changeEvent.target.value);
  };

  const visibleMovies = useMemo(() => filterMovies(query), [query]);

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
                onChange={handleSetValue}
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
