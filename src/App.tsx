import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  function caseInsensitiveSearch(firstStr: string, secondtStr: string) {
    return firstStr.toLowerCase().includes(secondtStr.toLowerCase());
  }

  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => (
    setSearchQuery(event.target.value)
  );

  const visibleMovies = moviesFromServer.filter(movie => (
    caseInsensitiveSearch(movie.title, searchQuery)
    || caseInsensitiveSearch(movie.description, searchQuery)
  ));

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
                value={searchQuery}
                onChange={handleChange}
                className="input"
                placeholder="Type search word"
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
