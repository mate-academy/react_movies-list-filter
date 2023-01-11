import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [movieName, setMovieName] = useState('');

  const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setMovieName(value);
  };

  const visibleMoviesOnList = moviesFromServer.filter(movie => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();
    const preparedName = movieName.toLowerCase().trim();

    return title.includes(preparedName) || description.includes(preparedName);
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
                value={movieName}
                onChange={handleOnChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMoviesOnList} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
