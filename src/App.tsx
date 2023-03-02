import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const chackStrForSubstr = (str:string, searchStr:string) => {
  return str.toLowerCase().includes(searchStr.toLowerCase());
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = moviesFromServer
    .filter(value => {
      const { title, description } = value;

      return chackStrForSubstr(title, query)
        || chackStrForSubstr(description, query);
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
                onChange={(e) => {
                  setQuery(e.target.value.trim());
                }}
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
