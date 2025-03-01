import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const searchResultsMovies = moviesFromServer.filter(movie => {
    const movieTitle = movie.title.toLowerCase();
    const movieDescription = movie.description.toLowerCase();

    const normalizedOuery = query
      .toLowerCase()
      .split(' ')
      .filter(word => word.length > 0)
      .join(' ');

    return (
      movieTitle.includes(normalizedOuery)
      || movieDescription.includes(normalizedOuery)
    );
  });

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
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={searchResultsMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
