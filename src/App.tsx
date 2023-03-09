import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterBySubstr(string: string, substring: string) {
  const validatedStr = string.toLowerCase();
  const validatedSubstr = substring.toLowerCase().trim();

  return validatedStr.includes(validatedSubstr);
}

function prepareMovies(query: string) {
  return moviesFromServer.filter(movie => {
    const { title, description } = movie;

    return filterBySubstr(title, query) || filterBySubstr(description, query);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const hadleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const visibleMovies = prepareMovies(query);

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
                onChange={hadleChange}
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
