import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const getQuery = (searchBase: string, searchQuery: string) => {
    const normalizedBase = searchBase.toLowerCase();
    const normalizedQuery = searchQuery.toLowerCase().trim();

    return normalizedBase.includes(normalizedQuery);
  };

  const visibleMovies = [...moviesFromServer].filter(
    movie => getQuery(movie.title, query)
      || getQuery(movie.description, query),
  );

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
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
