import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const lowerQuery = query.toLowerCase();

  const getPreparedSearch = (textFrom: string) => {
    return textFrom.toLowerCase().includes(lowerQuery)
  }

  const moviesToShow = moviesFromServer.filter(movie => {
    const { title, description } = movie;

    return getPreparedSearch(title)
  || getPreparedSearch(description);
  });

  const handleQuerySelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
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
                onChange={handleQuerySelection}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesToShow} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
