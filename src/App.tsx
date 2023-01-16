import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const visibleMovies = moviesFromServer.filter(movie => {
    const normalizedTitle = movie.title.toLowerCase();
    const normalizedDescription = movie.description.toLowerCase();
    const normalizedQuery = searchQuery
      .toLowerCase()
      .split(' ')
      .filter(Boolean)
      .join(' ');

    return normalizedTitle.includes(normalizedQuery)
      || normalizedDescription.includes(normalizedQuery);
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-searchQuery" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-searchQuery"
                className="input"
                placeholder="Type search word"
                name="searchQuery"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
