import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchWord, setSearchWord] = useState('');

  const visibleMobies = searchWord !== ''
    ? moviesFromServer.filter(({ title, description }) => {
      if (title.toLowerCase().includes(searchWord.toLowerCase())
        || description.toLocaleLowerCase().includes(searchWord.toLowerCase())) {
        return true;
      }

      return false;
    })
    : [...moviesFromServer];

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
                value={searchWord}
                onChange={({ target }) => {
                  setSearchWord(target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMobies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
