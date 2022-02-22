/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies: Movie[], query: string): Movie[] {
  const lowerCaseQuery = query.toLowerCase();

  return movies.filter(m => {
    const lowerCaseTitle = m.title.toLowerCase();
    const lowerCaseDesc = m.description.toLowerCase();

    return lowerCaseTitle.includes(lowerCaseQuery)
    || lowerCaseDesc.includes(lowerCaseQuery);
  });
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const visibleMovies = getVisibleMovies(moviesFromServer, query);

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
                value={query}
                onChange={onQueryChange}
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
