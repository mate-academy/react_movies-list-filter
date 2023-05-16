import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [input, setInput] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInput(event.target.value);
  };

  const trimmedInput = input
    .trim()
    .toLowerCase();

  const filteredMovies = moviesFromServer.filter(
    (movie) => movie.title
      .toLowerCase()
      .includes(
        trimmedInput,
      )
      || movie.description
        .toLowerCase()
        .includes(
          trimmedInput,
        ),
  );

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
                value={input}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
