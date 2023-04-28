import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function isMovieMatchQuery(filmProperty: string, query: string): boolean {
  return filmProperty.toLowerCase().includes(query.toLowerCase().trim());
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(({ title, description }) => (
    isMovieMatchQuery(title, query) || isMovieMatchQuery(description, query)));

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => (
    setQuery(event.target.value)
  );

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
                onChange={handleQuery}
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
