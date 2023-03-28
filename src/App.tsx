import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleFilms = moviesFromServer.filter(film => {
    const description = film.description.toLowerCase();
    const title = film.title.toLowerCase();
    const queryChecked = query.toLowerCase().trim();

    return (
      description.includes(queryChecked)
      || title.includes(queryChecked));
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
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleFilms} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
