/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App :React.FC = () => {
  const [query, setQuery] = useState('');

  const getVisibleMovies = () => {
    if (query !== '') {
      return moviesFromServer.filter(movie => (
        movie.title.toLowerCase().includes(query.toLowerCase())
        || movie.description.toLowerCase().includes(query.toLowerCase())
      ));
    }

    return moviesFromServer;
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
                onChange={(event) => setQuery(event?.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={getVisibleMovies()} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
