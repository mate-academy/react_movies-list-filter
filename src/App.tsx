import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleFilms = (movies: Movie[], searchQuery: string): Movie[] => {
    return movies.filter(movie => {
      const preparedTitle = movie.title.toLowerCase();
      const preparedDescription = movie.description.toLowerCase();
      const preparedQuery = searchQuery.toLowerCase();

      return preparedTitle.includes(preparedQuery)
        || preparedDescription.includes(preparedQuery);
    });
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
                onChange={(event) => {
                  setQuery((event.target.value).toLowerCase().trim());
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleFilms(moviesFromServer, query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
