import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchMovie, setSearchMovie] = useState('');

  const isMovieIncludeQuery = (value: string) => Boolean(
    value.toLowerCase().replace(/\s/g, '').includes(
      searchMovie.toLowerCase().replace(/\s/g, ''),
    ),
  );

  const visibleMovies = moviesFromServer.filter((movie) => (
    isMovieIncludeQuery(movie.title)
    || isMovieIncludeQuery(movie.description)
  ));

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
                value={searchMovie}
                onChange={(event) => {
                  setSearchMovie(event.target.value);
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
