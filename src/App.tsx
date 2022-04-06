import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchMovie, setSearchMovie] = useState('');

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchMovie(event.target.value);
  };

  const visibleMovies = moviesFromServer
    .filter(movie => (movie.title + movie.description).toLowerCase()
      .includes(searchMovie.toLowerCase()));

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
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {visibleMovies
          ? <MoviesList movies={visibleMovies} />
          : <MoviesList movies={moviesFromServer} />}
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
