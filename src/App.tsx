import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const transformToLowerCase = (text: string) => {
    return text.toLowerCase();
  };

  const visibleMovies = moviesFromServer.filter(({ title, description }) => {
    const fixedTitle = transformToLowerCase(title);
    const fixedDescription = transformToLowerCase(description);
    const fixedQuery = query.toLowerCase();

    return fixedTitle.includes(fixedQuery)
      || fixedDescription.includes(fixedQuery);
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

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
                onChange={handleChange}
                value={query}
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
