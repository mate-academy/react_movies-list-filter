import React, { useState } from 'react';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import './App.scss';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const toLowerCase = query.toLowerCase();

  const visibleMovies = moviesFromServer
    .filter(movie => movie.title.toLowerCase()
      .includes(toLowerCase) || movie.description.toLowerCase()
      .includes(toLowerCase));

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
                onChange={event => setQuery(event.target.value)}
                id="search-query"
                className="input"
                placeholder="Type search word"
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
