import React, { useState, ChangeEvent } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Movie {
  title: string;
  description: string;
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const movies: Movie[] = moviesFromServer;

  const filteredMovies = movies.filter(movie => {
    const normalizeQuery = query.toLowerCase().trim();

    return (
      movie.title.toLowerCase().includes(normalizeQuery) ||
      movie.description.toLowerCase().includes(normalizeQuery)
    );
  });

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
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
                onChange={handleQueryChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
