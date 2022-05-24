import React, { useState, useMemo } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchedMovie, setSearchedMovie] = useState('');

  const preparedMovie = [...moviesFromServer];

  const movieSearch = useMemo(() => preparedMovie.filter(movie => {
    const findTitle = movie.title.toLowerCase().includes(searchedMovie.toLowerCase());

    const findDescription = movie.description.toLowerCase().includes(searchedMovie.toLowerCase());

    return findTitle || findDescription;
  }), [preparedMovie]);

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
                value={searchedMovie}
                onChange={(event) => setSearchedMovie(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movieSearch} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
