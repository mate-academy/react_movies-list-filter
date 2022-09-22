import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const queryForFiltration = query.toLowerCase();

  function caseInsensitiveSearch(movieTitle: string, queryServer: string) {
    return movieTitle.toLowerCase().includes(queryServer);
  }

  const visibleMovies = moviesFromServer.filter(movie => (
    caseInsensitiveSearch(movie.title, queryForFiltration)
    || caseInsensitiveSearch(movie.description, queryForFiltration)
  ));

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
                onChange={handleChange}
                value={query}
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
