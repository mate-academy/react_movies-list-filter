// eslint-disable max-len
import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  // eslint-disable-next-line
  let [valueInput, valueFunc] = useState('');

  const filterMovie = moviesFromServer.filter(movie => {
    return movie.title.toLocaleLowerCase()
      .indexOf(valueInput.toLocaleLowerCase()) >= 0
    || movie.description.toLocaleLowerCase()
      .indexOf(valueInput.toLocaleLowerCase()) >= 0;
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
                  valueFunc(valueInput = e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterMovie} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
