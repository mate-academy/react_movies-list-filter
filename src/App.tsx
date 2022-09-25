import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, SetQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => (
    SetQuery(event.target.value)
  );

  const filterMovies = query
    ? moviesFromServer.filter(({ title, description }) => {
      return (`${title} ${description}`).toLowerCase()
        .includes(query.toLowerCase());
    })
    : moviesFromServer;

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
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
