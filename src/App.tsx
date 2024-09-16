import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const formattedQuery = query.trim().toLocaleLowerCase();

  const visibleMovies = moviesFromServer.filter(
    (movie) => {
      const formattedTitle = movie.title
        .toLocaleLowerCase();
      const formattedDescription = movie.description.toLocaleLowerCase();

      return (
        formattedTitle.includes(formattedQuery)
        || formattedDescription.includes(formattedQuery)
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
                value={query}
                placeholder="Type search word"
                onChange={(event) => {
                  setQuery(() => event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
