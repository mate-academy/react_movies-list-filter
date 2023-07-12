import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [filmTitle, searchFilm] = useState('');

  const handleSearch = (event: { target:
  { value: React.SetStateAction<string>; }; }) => {
    searchFilm(event.target.value);
  };

  const [movies] = useState(moviesFromServer);

  const filteredMovies = movies.filter((movie) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    movie.title.toLowerCase().includes(filmTitle.toLowerCase()));

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
                value={filmTitle}
                onChange={handleSearch}
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
