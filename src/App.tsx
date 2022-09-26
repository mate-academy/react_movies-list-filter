import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    const titleLower = movie.title.toLowerCase();
    const descLower = movie.description.toLowerCase();
    const inputLower = inputValue.toLowerCase().trim();

    return (titleLower.includes(inputLower)
      || descLower.includes(inputLower)
    );
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
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={inputValue
          ? visibleMovies
          : moviesFromServer}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
