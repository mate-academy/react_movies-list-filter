import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const searcherToLowerCase = (value: string) => {
    return value.toLowerCase().includes(query.toLowerCase());
  };

  const viewMovies = moviesFromServer.filter(
    movie => searcherToLowerCase(movie.title)
      || searcherToLowerCase(movie.description),
  );

  const handleSearch = (event:
  { target: { value: React.SetStateAction<string>; }; }) => {
    return setQuery(event.target.value);
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
                placeholder="Search"
                value={query}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={viewMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
