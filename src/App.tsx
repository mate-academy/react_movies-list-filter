import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setSearchValue] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setSearchValue(inputValue);

    const filteredMovies = moviesFromServer.filter((movie) => {
      return (
        movie.title.toLowerCase()
          .split(' ').join('')
          .includes(inputValue.toLowerCase().split(' ').join(''))
        || movie.description.toLowerCase()
          .split(' ').join('')
          .includes(inputValue.toLowerCase().split(' ').join(''))
      );
    });

    setVisibleMovies(filteredMovies);
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
                value={query}
                onChange={handleChange}
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
