import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const includesInMovies = (value: string, query: string) => {
  return value.toLowerCase().includes(query.toLowerCase());
};

export const App: React.FC = () => {
  const [query, setSearch] = useState('');
  const visibleMovies = moviesFromServer.filter(movie => (
    includesInMovies(movie.title, query)
    || includesInMovies(movie.description, query)
  ));

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
                name="search"
                value={query}
                placeholder="Type search word"
                onChange={event => setSearch(event.target.value)}
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
