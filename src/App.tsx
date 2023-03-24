import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getLowerText = (text: string): string => {
  return text.toLowerCase();
};

const filterFilms = (query: string) => {
  const fixedQuery = getLowerText(query).trim();

  return moviesFromServer.filter(movie => {
    const { title, description } = movie;

    return getLowerText(title).includes(fixedQuery)
    || getLowerText(description).includes(fixedQuery);
  });
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

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
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search movie"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterFilms(query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
