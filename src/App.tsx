import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const onChange = (el: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(el.currentTarget.value);
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
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesFromServer} searchQuery={searchValue} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
