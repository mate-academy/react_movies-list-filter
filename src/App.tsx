import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovie = moviesFromServer.filter(
    movie => {
      const value = query.toLowerCase().trim();
      
      return movie.description.toLowerCase().includes(value)
        || movie.title.toLowerCase().includes(value);
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
                onChange={(e) => {
                  setQuery(e.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovie} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
