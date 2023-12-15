import './App.scss';
import React, { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterMovies = (movies, query) => {
  const selectedQuery = query.toLowerCase().trim();

  return movies.filter(
    movie => movie.title.toLowerCase().trim().includes(selectedQuery)
    || movie.description.toLowerCase().trim().includes(selectedQuery),
  );
};

export const App = () => {
  const [query, setQuery] = useState('');

  const QueryFilter = (event) => {
    setQuery(event.target.value);
  };

  const visibleMovies = filterMovies(moviesFromServer, query);

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
                onChange={QueryFilter}
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
