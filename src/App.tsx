import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
// import { values } from 'cypress/types/lodash';

export const App: React.FC = () => {
  const [searchMovieName, setSearchMovieName] = useState('');
  const correstMovieName = searchMovieName.toLowerCase().trim();
  const filteredMovies = moviesFromServer
    .filter(film => film.title.toLowerCase().includes(correstMovieName)
    || film.description.toLowerCase().includes(correstMovieName));

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
                value={searchMovieName}
                onChange={(event) => setSearchMovieName(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
        {/* <MoviesList movies={moviesFromServer} /> */}
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
