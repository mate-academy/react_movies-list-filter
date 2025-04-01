import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const isExactSearch = query.startsWith('"') && query.endsWith('"');
  const cleanQuery = query.replace(/^"|"$/g, '').trim().toLowerCase();

  const visibleMovies = moviesFromServer.filter(({ title, description }) => {
    if (!cleanQuery) {
      return true;
    }

    const titleLower = title.toLowerCase();
    const descriptionLower = description.toLowerCase();

    if (isExactSearch) {
      return titleLower === cleanQuery || descriptionLower === cleanQuery;
    }

    if (titleLower === cleanQuery) {
      return true;
    }

    return (
      titleLower.includes(cleanQuery) || descriptionLower.includes(cleanQuery)
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
                value={query}
                onChange={handleSearch}
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
