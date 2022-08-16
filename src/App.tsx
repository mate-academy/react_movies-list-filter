import React, { useState, useEffect } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  let id;

  useEffect(() => {
    setIsLoading(true);
    id = setTimeout(() => setIsLoading(false), 300);
  }, [query]);

  clearTimeout(id);

  const visibleMovies = moviesFromServer.filter(movie => {
    return (
      movie.title.toLowerCase().includes(query.toLowerCase())
      || movie.description.toLowerCase().includes(query.toLowerCase())
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
                onChange={(event) => (
                  setQuery(event.target.value)
                )}
              />
            </div>
          </div>
        </div>
        <div
          className={`wrapper animate__animated ${isLoading ? 'animate__flash' : ''}`}
        >
          <MoviesList movies={visibleMovies} />
        </div>
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
