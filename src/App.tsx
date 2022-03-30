import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  // Optional list to render
  const visibleMovies = moviesFromServer
    .filter(movie => (
      movie.title
        .toLowerCase()
        .includes(searchValue.toLowerCase())

      || movie.description
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    ));

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              htmlFor="search-query"
              className="label"
            >
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                value={searchValue}
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  const { target } = event;

                  setSearchValue(target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={searchValue.length > 0
          ? visibleMovies
          : moviesFromServer}
        />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
