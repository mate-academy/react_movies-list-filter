import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function isMatch(movieProperty: string, query: string): boolean {
  const correctQuery = query.toLowerCase().trim();
  const propertyValue = movieProperty.toLowerCase();

  return propertyValue.includes(correctQuery);
}

export const App: React.FC = () => {
  const getVisiableMovies = (query: string) => {
    return moviesFromServer.filter(movie => {
      const descriptionMatches = isMatch(movie.description, query);
      const titleMatches = isMatch(movie.title, query);

      return descriptionMatches || titleMatches;
    });
  };

  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                placeholder="Type search word"
                value={query}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={getVisiableMovies(query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
