import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import React, { useState } from 'react';

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredMovies = moviesFromServer.filter(
    movie =>
      movie.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      movie.description
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase()),
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
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
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
