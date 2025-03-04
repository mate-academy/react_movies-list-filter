import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const findQuery = (queryElement: string, searchedElement: string):boolean => {
    const lowerQuery = queryElement.toLowerCase().trim();
    const lowSearchElement = searchedElement.toLowerCase().trim();

    return lowSearchElement.includes(lowerQuery);
  };

  const filterMovies = moviesFromServer.filter(movie => (
    findQuery(query, movie.title) || findQuery(query, movie.description)));

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
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
