import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setInputValue] = useState('');

  const moviesListModified = () => {
    const visibleMovies = moviesFromServer.filter(movie => {
      const lowerCaseTitle = movie.title.toLowerCase();
      const lowerCaseDescription = movie.description.toLowerCase();
      const lowerCaseQuery = query.toLowerCase();

      return lowerCaseTitle.includes(lowerCaseQuery)
      || lowerCaseDescription.includes(lowerCaseQuery);
    });

    return visibleMovies;
  };

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
                name="input"
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesListModified()} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
