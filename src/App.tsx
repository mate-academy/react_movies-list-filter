import React, { useState } from 'react';
import { MoviesList } from './components/MoviesList';

import moviesFromServer from './api/movies.json';
import './App.scss';

export const App = () => {
  const [query, setQuery] = useState('');

  const handleSetQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.toLocaleLowerCase());
  };

  const visibleMovies = moviesFromServer.filter(
    movie => movie.title.toLocaleLowerCase().includes(query)
  || movie.description.toLocaleLowerCase().includes(query),
  );

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
                value={query}
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={handleSetQuery}
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
