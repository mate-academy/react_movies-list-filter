import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.currentTarget.value);
  }

  const visibleMovies = moviesFromServer.filter(movie => {
    const lowerCaseInput = searchQuery
      .toLowerCase()
      .split(' ')
      .filter(Boolean)
      .join(' ');
    const movieTitle = movie.title.toLowerCase();
    const movieDescription = movie.description.toLowerCase();

    return (
      movieTitle.includes(lowerCaseInput)
      || movieDescription.includes(lowerCaseInput)
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
                value={searchQuery}
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
