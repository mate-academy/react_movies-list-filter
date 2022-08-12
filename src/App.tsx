import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterMovies = (currentMovies: Movie[]) => {
    return currentMovies.filter(curentMovie => (
      // eslint-disable-next-line max-len
      (curentMovie.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))
      // eslint-disable-next-line max-len
      || (curentMovie.description.toLowerCase().includes(searchQuery.toLowerCase().trim()))
    ));
  };

  const preparedMovies = filterMovies(moviesFromServer);

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
                onChange={(e) => (
                  setSearchQuery(e.target.value)
                )}
                value={searchQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={preparedMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
