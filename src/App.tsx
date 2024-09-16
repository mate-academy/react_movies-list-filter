import React, { useState, ChangeEvent } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const visibleMovies = moviesFromServer.filter((movie) => {
    const searchValueInLowerCase = searchValue.toLocaleLowerCase().trim();
    const stringToCheck = `${movie.title}${movie.description}`.toLocaleLowerCase();

    return stringToCheck.includes(searchValueInLowerCase);
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

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
                value={searchValue}
                onChange={handleInput}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
