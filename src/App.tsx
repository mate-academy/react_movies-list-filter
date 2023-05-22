import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  const normalizedQuery = query.trim().toLowerCase();

  const searchedMovies = moviesFromServer.filter(
    movie => {
      const { title, description } = movie;

      return (
        title.toLowerCase().includes(normalizedQuery)
        || description.toLowerCase().includes(normalizedQuery)
      );
    },
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
                onChange={handleChange}
                value={query}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={searchedMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
