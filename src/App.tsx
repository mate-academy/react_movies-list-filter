import React, { useState, useMemo, useCallback } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type Func = React.Dispatch<React.SetStateAction<string>>;

const debounce = (f: Func,
  delay: number) => {
  let timerId: NodeJS.Timeout;

  return (arg: string) => {
    clearTimeout(timerId);
    timerId = setTimeout(f, delay, arg);
  };
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState(query);
  const getVisibleMovies = () => (
    moviesFromServer.filter(movie => {
      const isQueryInTitle = movie.title
        .toLowerCase().includes(appliedQuery.trim().toLowerCase());
      const isQueryInDescription = movie.description
        .toLowerCase().includes(appliedQuery.trim().toLowerCase());

      return isQueryInTitle || isQueryInDescription;
    }));

  const applyQuery = useCallback(debounce(setAppliedQuery, 1000), []);
  const visibleMovies = useMemo(getVisibleMovies,
    [moviesFromServer, appliedQuery]);

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
                onChange={(event) => {
                  setQuery(event.target.value);
                  applyQuery(event.target.value);
                }}
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
