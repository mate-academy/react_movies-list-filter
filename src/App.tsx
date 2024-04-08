import React, { useState, ChangeEventHandler } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(query: string) {
  if (!query) {
    return moviesFromServer;
  }

  const lowerCase = query.toLocaleLowerCase();

  return moviesFromServer.filter(
    movie =>
      movie.title.toLocaleLowerCase().includes(lowerCase) ||
      movie.description.toLocaleLowerCase().includes(lowerCase),
  );
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch: ChangeEventHandler<HTMLInputElement> = event => {
    setQuery(event.target.value.trim());
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
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterMovies(query)} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
