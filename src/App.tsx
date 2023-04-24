import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function isValidFilm(filmProperty: string, query: string): boolean {
  return filmProperty.toLowerCase().includes(query.toLowerCase().trim());
}

export const App: React.FC = () => {
  const [query, changeQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> &
  { target : HTMLButtonElement }) => {
    const { value } = event.target;

    changeQuery(value);
  };

  const visibleMovies = moviesFromServer.filter(({ title, description }) => (
    isValidFilm(title, query) || isValidFilm(description, query)));

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
                value={query}
                onChange={handleChange}
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
