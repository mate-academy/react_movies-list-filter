import React, { FC, useCallback, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const debounce = (
  callback: React.Dispatch<React.SetStateAction<string>>, delay: number,
) => {
  let timerId: number | undefined;

  return (...args: string[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(callback, delay, ...args);
  };
};

export const App: FC = () => {
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');

  const applyQuery = useCallback(debounce(
    setAppliedQuery, 1000,
  ), []);

  const handleInputChange = (newValue: string) => {
    setQuery(newValue);
    applyQuery(newValue.trim());
  };

  const getMovies = (newMovies: Movie[]) => {
    const loweredQuery = appliedQuery.toLowerCase();

    return newMovies.filter(({ title, description }) => {
      const isTitleMatch = title
        .toLowerCase()
        .includes(loweredQuery);
      const isDescriptionMatch = description
        .toLowerCase()
        .includes(loweredQuery);

      return isTitleMatch || isDescriptionMatch;
    });
  };

  const visibleMovies = getMovies(moviesFromServer);

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
                onChange={(event) => handleInputChange(event.target.value)}
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
