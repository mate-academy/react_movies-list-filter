import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const handlerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const normalizedSearchValue = searchValue.toLowerCase().trim();

  const visibleMovies = moviesFromServer.filter(movie => {
    const { title, description } = movie;
    const movieTitle = title.toLowerCase();
    const movieDesc = description.toLowerCase();

    return movieTitle.includes(normalizedSearchValue)
      || movieDesc.includes(normalizedSearchValue);
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
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
                onChange={handlerInputChange}
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
