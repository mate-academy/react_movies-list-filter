import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [search, setSearch] = useState('');

  const normalizedSearch = search.toLowerCase().trim();
  const visiableMovies = moviesFromServer.filter(film => {
    const stringToCheck = `
    ${film.title}
     ${film.description}`;

    return stringToCheck.toLowerCase().includes(normalizedSearch);
  });
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => (
    setSearch(event.target.value)
  );

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
                value={search}
                onChange={handleInput}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visiableMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
