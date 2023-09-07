import React, { useState, useCallback } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const filterMovies = useCallback(
    (searchQuery: string) => {
      const filteredMovies = moviesFromServer.filter(
        (movie) => movie.title.toLowerCase()
          .includes(searchQuery.trim().toLowerCase())
          || movie.description.toLowerCase()
            .includes(searchQuery.trim().toLowerCase()),
      );

      setVisibleMovies(filteredMovies);
    },
    [moviesFromServer],
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setQuery(value);

    filterMovies(value);
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
                value={query}
                onChange={handleInputChange}
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
