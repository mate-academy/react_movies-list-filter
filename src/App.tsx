import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export function checkLetter(text: string, query: string): boolean {
  return text.toLowerCase().includes(query.toLowerCase())
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const filtredMovies = moviesFromServer.filter(({ title, description }) => (
    checkLetter(title, query)) || checkLetter(description, query));

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
                onChange={(event) => (setQuery(event.target.value))}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filtredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
