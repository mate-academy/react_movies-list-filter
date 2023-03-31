import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { searchQueryIn } from './helpers';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const visibleMovies = moviesFromServer.filter(
    ({ title, description }) => (
      searchQueryIn(title, query) || searchQueryIn(description, query)
    ),
  );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field ">
            <label
              htmlFor="search-query"
              className="label"
            >
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Search"
                value={query}
                onChange={handleQueryChange}
              />
            </div>
          </div>
        </div>

        <div className="movies__container">
          <MoviesList
            movies={visibleMovies}
          />
        </div>
      </div>
    </div>
  );
};
