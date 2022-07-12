import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (value: string) => {
    setQuery(value);
  };

  let visibleMovies = moviesFromServer;

  if (query.length) {
    const queryForFiltration = query.toLowerCase();

    visibleMovies = moviesFromServer.filter(movie => {
      return movie.title.toLowerCase().includes(queryForFiltration)
        || movie.description.toLowerCase().includes(queryForFiltration);
    });
  }

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
                onChange={({ target }) => {
                  handleQueryChange(target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
