import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);
  const [filmName, setFilmName] = useState('');

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
                value={filmName}
                onChange={(event) => {
                  setFilmName(event.target.value);
                  setVisibleMovies(moviesFromServer.filter(movie => {
                    return movie
                      .title
                      .toLowerCase()
                      .includes(filmName.toLowerCase()) || movie
                      .description
                      .toLowerCase()
                      .includes(filmName.toLowerCase());
                  }));
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
