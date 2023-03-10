import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(({ description, title }) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedDescription = description.toLowerCase();
    const normalizedQuery = query.trim().toLowerCase();
    const titleFits = normalizedTitle.includes(normalizedQuery);
    const descriptionFits = normalizedDescription.includes(normalizedQuery);

    return titleFits || descriptionFits;
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

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
                name="query"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={handleSearch}
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
