import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC<Movie> = () => {
  const [query, setQuery] = useState('');
  const filterMovies = (
    event: React.ChangeEvent< HTMLInputElement>,
  ) => setQuery(
    event.currentTarget.value,
  );

  const visibleMovies = moviesFromServer.filter((movie) => {
    return movie.title
      .toLowerCase()
      .includes(query
        .toLowerCase())
    || movie.description
      .toLowerCase()
      .includes(query
        .toLowerCase());
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
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
                onChange={filterMovies}

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
