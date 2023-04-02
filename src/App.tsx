import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setQuery(value);
  };

  const moviesToShow = moviesFromServer.filter(({ title, description }) => {
    const lowerCasedTitle = title.toLowerCase();
    const lowerCasedDescription = description.toLowerCase();
    const lowerCasedQuery = query.toLowerCase().trim();

    return lowerCasedTitle.includes(lowerCasedQuery)
        || lowerCasedDescription.includes(lowerCasedQuery);
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

        <MoviesList movies={moviesToShow} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
