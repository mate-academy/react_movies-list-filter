import React, { useMemo, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const checkContains = (movieItem: string, inputValue: string): boolean => {
  return movieItem.toLowerCase().includes(inputValue.toLowerCase());
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => (
    setQuery(event.target.value)
  );

  const visibleMovies = useMemo(() => (
    moviesFromServer.filter(({ title, description }) => (
      checkContains(title, query)
      || checkContains(description, query)
    ))
  ), [query]);

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
                onChange={handleChangeSearch}
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
