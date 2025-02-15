import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const visibleMovies = moviesFromServer.filter(movie => {
    const q = query
      .replace(/\s{1,}/g, ' ')
      .trim()
      .toLowerCase();

    if (q === '') {
      return true;
    }

    return (
      movie.description.toLowerCase().includes(q) ||
      movie.title.toLowerCase().includes(q)
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
                onChange={event => {
                  setQuery(event.target.value);
                }}
                value={query}
              />
            </div>
          </div>
        </div>

        {/* <MoviesList movies={moviesFromServer} /> */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
