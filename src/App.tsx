import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovie = moviesFromServer.filter(movie => {
    const loweredQuery = query.toLowerCase().replace(/\s/g, '');
    const loweredTitle = movie.title.toLowerCase().replace(/\s/g, '');
    const loweredDescription = movie.description
      .toLowerCase()
      .replace(/\s/g, '');

    return (
      loweredTitle.includes(loweredQuery) ||
      loweredDescription.includes(loweredQuery)
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
                value={query}
                className="input"
                placeholder="Type search word"
                onChange={element => setQuery(element.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovie} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
