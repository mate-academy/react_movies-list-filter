// eslint-disable max-len
import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const searchText = (arr:string, text:string) => {
  return arr.toLocaleLowerCase()
    .includes(text.toLocaleLowerCase());
};

export const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const filteredMovies = moviesFromServer.filter(movie => {
    return searchText(movie.title, searchValue)
    || searchText(movie.description, searchValue);
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
                  setSearchValue(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
