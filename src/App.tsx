import React, { useCallback, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChange = useCallback((e: React.BaseSyntheticEvent) => {
    setQuery(e.target.value);
  }, []);

  const handleSearchQuery = useCallback(() => {
    const loweredQuery = query.toLowerCase().trim();

    return moviesFromServer.filter(movie => {
      const { description, title } = movie;

      return (
        description.toLowerCase().includes(loweredQuery)
        || title.toLowerCase().includes(loweredQuery)
      );
    });
  }, [query]);

  const filteredMovies = handleSearchQuery();

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
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
