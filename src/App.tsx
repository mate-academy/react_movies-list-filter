import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [value, setValue] = useState('');

  const forSort = moviesFromServer.filter(({ title, description }) => {
    const lowValue = value.toLowerCase();

    return (
      title.toLowerCase().includes(lowValue)
      || description.toLowerCase().includes(lowValue)
    );
  });

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
                value={value}
                onChange={(event) => setValue(event.target.value)}
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={forSort} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
