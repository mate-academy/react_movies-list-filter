import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = moviesFromServer.filter(({ description, title }) => {
    const normDesc = description.toLowerCase();
    const normTitle = title.toLowerCase();
    const normQuery = query.toLowerCase();

    return (normDesc.includes(normQuery) || normTitle.includes(normQuery));
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <div className="control">
              <label htmlFor="search-query" className="label">
                Search movie

                <input
                  type="text"
                  id="search-query"
                  name="search-query"
                  value={query}
                  onChange={(event) => (
                    setQuery(event.target.value)
                  )}
                  className="input"
                  placeholder="Type search word"
                />
              </label>
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
