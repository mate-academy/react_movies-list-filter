/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const movieSearch = (event: any) => {
    setQuery(event.target.value);
  };

  const filterMovieFromServer = () => {
    const filteredMoviesList
      = moviesFromServer.filter((movie: Movie) => {
        const { title, description } = movie;

        if (query.length === 0) {
          return true;
        }

        if (title.toLowerCase().includes(query.trim().toLowerCase())
          || description.toLowerCase().includes(query.trim().toLowerCase())) {
          return true;
        }

        return false;
      });

    return filteredMoviesList;
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
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
                onChange={movieSearch}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={filterMovieFromServer()}
        />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
