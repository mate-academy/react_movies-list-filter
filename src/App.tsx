import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [filter, setFilter] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFilter(event.target.value.trimStart().trimEnd());
  };

  const filteredMovies = moviesFromServer.filter(v => v.title.toLowerCase()
    .includes(filter.toLowerCase())
    || v.description.toLowerCase()
      .includes(filter.toLowerCase()));

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
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
