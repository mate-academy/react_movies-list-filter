import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = [...moviesFromServer];

  const getSortedMovies = (keyword: string) => {
    if (keyword) {
      return visibleMovies.filter((movie) => {
        return movie.title.toLowerCase().includes(keyword)
        || movie.description.toLowerCase().includes(keyword);
      });
    }

    return visibleMovies;
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
                onChange={(event) => setQuery(event.target.value.toLowerCase())}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={getSortedMovies(query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
