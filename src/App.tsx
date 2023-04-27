import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function checkSubstr(str: string, subStr: string): boolean {
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  return lowerStr.includes(lowerSubStr);
}

export const App: React.FC = () => {
  const [query, changeQuery] = useState('');
  const visibleMovies = moviesFromServer
    .filter(movie => {
      const { description, title } = movie;

      return (
        checkSubstr(query, description) || checkSubstr(query, title)
      );
    });

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeQuery(event.target.value.trim());
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
                onChange={handleQueryChange}
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
