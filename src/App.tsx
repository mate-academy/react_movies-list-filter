import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeQuery = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value);
  };

  const visibleMovies = (movies: Movie[]): Movie[] => {
    return movies.filter(
      (movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        || movie.description.toLowerCase().includes(searchQuery.toLowerCase()),
    );
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
                value={searchQuery}
                placeholder="Type search word"
                onChange={handleChangeQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies(moviesFromServer)} />
      </div>
      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
