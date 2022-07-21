import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handlerQueryChange = (value: string) => {
    setQuery(value);
  };

  function containsQuery(firstStr: string, secondtStr: string) {
    return firstStr.toLowerCase().includes(secondtStr.toLowerCase());
  }

  const visibleMovies = moviesFromServer
    .filter(movie => {
      return containsQuery(movie.title, query)
      || containsQuery(movie.description, query);
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
                onChange={({ target }) => {
                  handlerQueryChange(target.value);
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
