import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const movies = moviesFromServer;
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(movies);

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    setQuery(input);

    const filteredMovies = movies.filter(
      (movie) => movie.title.toLowerCase().includes(input.toLowerCase().trim())
        || movie.description.toLowerCase().includes(input.toLowerCase().trim()),
    );

    setVisibleMovies(filteredMovies);
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
                onChange={search}
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
