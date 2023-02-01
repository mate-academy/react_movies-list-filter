import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  const toCaseInsensitive = (str: string) => str.toLowerCase();

  const visibleMovies = moviesFromServer.filter(({ title, description }) => {
    const queryParam = toCaseInsensitive(query.trim());
    const parsedTitle = toCaseInsensitive(title).includes(queryParam);
    const parsedDescription = toCaseInsensitive(description)
      .includes(queryParam);

    return parsedTitle || parsedDescription;
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

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
