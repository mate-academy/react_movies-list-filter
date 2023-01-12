import React, { useState, useEffect } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [moviesList, setMoviesList] = useState(moviesFromServer);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredMovies = moviesFromServer
      .filter((movie) => movie.title.toLowerCase().includes(searchTerm)
        || movie.description.toLocaleLowerCase().includes(searchTerm));

    setMoviesList(filteredMovies);
  }, [searchTerm]);

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
                onChange={(event) => {
                  const lowerCaseSearch = event.target.value
                    .toLowerCase()
                    .trim();

                  setSearchTerm(lowerCaseSearch);
                }}
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesList} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
