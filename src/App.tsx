import React, { useState } from 'react';
import './App.scss';
// import { event } from 'cypress/types/jquery';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const sortMovies:Movie[] = moviesFromServer.filter(
    (movie) => movie.title.toLowerCase().includes(query.toLowerCase().trim())
    || movie.description.toLowerCase().includes(query.toLowerCase().trim()),
  );

  // console.log(sortMovies);

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
                onChange={(eve) => {
                  setQuery(eve.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={sortMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
