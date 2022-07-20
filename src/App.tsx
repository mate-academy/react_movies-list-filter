import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [filterName, setFilterName] = useState('');

  const containsString = (text: string) => text
    .includes(filterName.toLowerCase());

  const visibleMovies = moviesFromServer
    .filter(movie => {
      const hasTitle = containsString(movie.title.toLowerCase());
      const hasDescription = containsString(movie.description.toLowerCase());

      return hasTitle || hasDescription;
    });

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setFilterName(value);
  };

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
                value={filterName}
                onChange={inputHandler}
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
