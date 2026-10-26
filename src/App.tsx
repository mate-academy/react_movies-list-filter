import React, { useState } from 'react';
import moviesFromServer from './api/movies.json';
import './App.scss';
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();
  const visibleMovies = moviesFromServer.filter(movie => {
    const titleMatches = movie.title.toLowerCase().includes(normalizedQuery);
    const descriptionMatches = movie.description
      .toLowerCase()
      .includes(normalizedQuery);

    return titleMatches || descriptionMatches;
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
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
