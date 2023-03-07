import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const hasMatch = (text: string, query: string) => {
  const lowercasedText = text.toLowerCase();
  const lowercasedQuery = query.toLowerCase().trim(); // overkill?

  return lowercasedText.includes(lowercasedQuery);
};

const prepareMovies = (query: string) => {
  return moviesFromServer.filter(movie => {
    const {
      title,
      description,
    } = movie;

    return hasMatch(title, query) || hasMatch(description, query);
  });
};

export const App: React.FC = () => {
  const [query, changeQuery] = useState('');

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeQuery(event.target.value);
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
                onChange={handleQuery}
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
