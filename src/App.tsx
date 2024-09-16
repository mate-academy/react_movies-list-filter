import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const isMatchQuery = (text: string, query: string): boolean => {
  const normalizedText = text.toLowerCase();
  const normalizedQuery = query.toLowerCase().trim();

  return normalizedText.includes(normalizedQuery);
};

export const filterMovies = (
  movies: Movie[],
  query: string,
): Movie[] => {
  if (!query) {
    return movies;
  }

  return movies
    .filter(({ title, description }) => {
      const foundInTitle = isMatchQuery(title, query);
      const foundInDescription = isMatchQuery(description, query);

      return foundInTitle || foundInDescription;
    });
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const visibleMovies = filterMovies(moviesFromServer, query);

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
                className="input"
                name="query"
                value={query}
                onChange={handleQueryChange}
                id="search-query"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
