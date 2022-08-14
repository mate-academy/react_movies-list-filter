import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [filter, setFilter] = useState('');

  const filterMovies = moviesFromServer
    .filter(({ title, description }) => (
      title.toLowerCase().startsWith(filter.trim().toLowerCase())
      || description.split(' ')
        .find(word => word
          .toLowerCase().startsWith(filter.trim().toLowerCase()))));

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
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
              />
            </div>
          </div>
        </div>
        {filterMovies.length > 0
          ? <MoviesList movies={filterMovies} filter={filter} />
          : <h2 className="no-movies">No movies found for your query</h2>}

      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
