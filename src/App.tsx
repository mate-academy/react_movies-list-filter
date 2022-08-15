import React, { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(
    movie => movie.title
      .toLowerCase()
      .includes(query.toLowerCase().trim())
    || movie.description
      .toLowerCase()
      .includes(query.toLowerCase().trim()),
  );

  return (
    <div className="page">
      <div className="page-content">
        <div className="search-bar">
          <input
            id="search-query"
            type="text"
            className="input-field"
            placeholder="Search..."
            value={query}
            onChange={(event) => {
              const { value } = event.target;

              setQuery(value);
            }}
          />
        </div>
        {visibleMovies.length > 0
          ? <MoviesList movies={visibleMovies} />
          : 'Nothing found'}
      </div>

      <div className="sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};
