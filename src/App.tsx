import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, changeQuery] = useState('');

  const isMatching = (prop: string, value: string) => {
    return prop.toLowerCase().match(value.toLowerCase());
  };

  const filterMovies = (value: string) => {
    return moviesFromServer
      .filter(movie => (
        isMatching(movie.title, value)
        || isMatching(movie.description, value)
      ));
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
                onChange={event => {
                  changeQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterMovies(query)} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
