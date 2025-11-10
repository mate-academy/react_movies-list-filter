import React, { useState, useMemo } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/movie';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const visibleMovies: Movie[] = useMemo(() => {
    if (query.trim() === '') {
      return moviesFromServer;
    }

    const lowerCaseQuery = query.toLowerCase();

    return moviesFromServer.filter(movie => {
      const titleMatches = movie.title.toLowerCase().includes(lowerCaseQuery);
      const descriptionMatches = movie.description
        .toLowerCase()
        .includes(lowerCaseQuery);

      return titleMatches || descriptionMatches;
    });
  }, [query]);

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
                onChange={handleQueryChange}
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
