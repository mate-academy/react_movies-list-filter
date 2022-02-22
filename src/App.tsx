import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    const { title, description } = movie;
    const lowerCaseTitle = title.toLowerCase();
    const lowerCaseDescription = description.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.includes(lowerCaseQuery)
      || lowerCaseDescription.includes(lowerCaseQuery);
  });

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputQuery = event.target.value;

    setQuery(inputQuery);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
              <input
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={onInputChange}
              />
            </label>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>
      <div className="sidebar">
        Sidebar goes here1
      </div>
    </div>
  );
};
