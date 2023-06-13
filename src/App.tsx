import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [movieInput, setMovieName] = useState('');
  const handlerhange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieName(e.target.value);
  };

  const visibleMovies = moviesFromServer.filter(movie => {
    const movieText = movieInput.toLocaleLowerCase();

    return movie.title.toLocaleLowerCase().includes(movieText)
    || movie.description.toLocaleLowerCase().includes(movieText);
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
                value={movieInput}
                onChange={handlerhange}
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
