import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, SetQuery] = useState('');

  const visibleMovies = () => {
    const queryNormilize = query.toLowerCase().trim();

    return (moviesFromServer.filter(movie => {
      const movieTitle = movie.title.toLowerCase();
      const movieDescription = movie.description.toLowerCase();

      return (movieTitle.includes(queryNormilize)
          || movieDescription.includes(queryNormilize)
      );
    }));
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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={(event) => {
                  SetQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies()} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
