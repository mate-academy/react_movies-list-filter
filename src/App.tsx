import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setQuery(value);
  };

  const getLowerString = (str: string): string => {
    return str.toLowerCase();
  };

  const handleSearchFilms = (films: Movie[]) => {
    const lowerQuery = getLowerString(query).trim();

    return films.filter(({ title, description }: Movie) => {
      const lowerTitle = getLowerString(title);
      const lowerDescription = getLowerString(description);

      return lowerTitle.includes(lowerQuery)
        || lowerDescription.includes(lowerQuery);
    });
  };

  const visibleMovies = handleSearchFilms(moviesFromServer);

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
                onChange={handleChangeQuery}
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
