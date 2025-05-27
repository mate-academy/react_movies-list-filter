import React, { useState, useEffect } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { MovieType } from './types/MovieType';
import moviesFromServer from './api/movies.json';
type Props = {};

export const App: React.FC<Props> = () => {
  const [query, setQuery] = useState<string>(''); // correto!
  const [filteredMovies, setFilteredMovies] =
    useState<MovieType[]>(moviesFromServer);
  useEffect(() => {
    const filtered = moviesFromServer.filter(
      movie =>
        movie.title.toLowerCase().includes(query.toLowerCase().trim()) ||
        movie.description.toLowerCase().includes(query.toLowerCase().trim()),
    );

    setFilteredMovies(filtered);
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
                value={query}
                className="input"
                onChange={e => setQuery(e.target.value)} // correto!
                placeholder="Type search word"
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
