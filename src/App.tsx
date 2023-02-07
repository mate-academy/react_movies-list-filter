import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value.trim());
  };

  const normalize = (text:string) => text.toLowerCase();

  const filteredMovies = () => {
    return [...moviesFromServer].filter(movie => {
      return normalize(movie.title).includes(query.toLocaleLowerCase())
        || normalize(movie.description).includes(query.toLocaleLowerCase());
    });
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
                onChange={inputHandle}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies()} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
