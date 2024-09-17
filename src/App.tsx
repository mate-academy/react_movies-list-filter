import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { filterMoviesHelper } from './utils/filterMoviesHelper';

export const App: React.FC = () => {
  const placeholder = 'Type search word';
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value;

    setSearchTerm(newTerm);
  };

  const filteredMovies = moviesFromServer.filter(
    movie => filterMoviesHelper(movie, searchTerm),
  );

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
                className="input"
                id="search-query"
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder={placeholder}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
