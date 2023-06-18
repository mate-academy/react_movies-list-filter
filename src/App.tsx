import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [search, setSearch] = useState('');

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCaseEvent = event.target.value.toLowerCase();

    setSearch(lowerCaseEvent);
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
                value={search}
                onChange={(event) => searchHandler(event)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesFromServer} search={search} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
