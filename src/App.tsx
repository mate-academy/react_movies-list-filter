import React, { ChangeEventHandler, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredMovies(query: string) {
  if (!query) {
    return moviesFromServer;
  }

  const lowerQuery = query.toLocaleLowerCase();

  return moviesFromServer.filter(
    movie =>
      movie.title.toLocaleLowerCase().includes(lowerQuery) ||
      movie.description.toLocaleLowerCase().includes(lowerQuery),
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

        <MoviesList movies={getFilteredMovies(query)} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
