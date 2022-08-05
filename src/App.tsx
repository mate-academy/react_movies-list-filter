import React, { ChangeEvent, useMemo, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const checkQuery = (movie: string, query: string) => (
  movie.toLowerCase().includes(query.toLowerCase())
);

const filterMovies = (query: string) => (moviesFromServer.filter(
  ({ title, description }) => (
    checkQuery(title, query) || checkQuery(description, query)
  ),
));

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => (
    setQuery(event.target.value)
  );

  const visibleMovies = useMemo(() => filterMovies(query), [query]);

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

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
