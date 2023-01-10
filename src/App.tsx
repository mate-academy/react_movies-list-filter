import React, { useEffect, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>(moviesFromServer);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const filterByQuery = (movie: Movie, param: keyof Movie, query: string) => {
      return movie[param].toLowerCase().includes((query));
    };

    setMovies(() => {
      const newState = [...moviesFromServer].filter((movie) => (
        filterByQuery(movie, 'title', searchQuery)
          || filterByQuery(movie, 'description', searchQuery)));

      return newState;
    });
  },
  [searchQuery]);

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
                onChange={(e) => setSearchQuery(e.currentTarget.value
                  .toLowerCase())}
                value={searchQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
