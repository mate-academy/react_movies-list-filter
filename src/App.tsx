import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchValue, searchHandler] = useState('');

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
                value={searchValue}
                onChange={(event) => {
                  searchHandler(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={moviesFromServer}
          search={searchValue}
        />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
