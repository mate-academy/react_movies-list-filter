import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const sortedMovies = () => {
    return moviesFromServer.filter(movie => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      return title.includes(query) || description.includes(query);
    });
  };

  const searchedValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.toLocaleLowerCase().trim());
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
                onChange={searchedValue}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={sortedMovies()} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
