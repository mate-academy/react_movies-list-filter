/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies: Movie[], query: string) {
  const lowQuery = query.toLowerCase();
  const visibleMovies = movies
    .filter((movie) => movie.title.toLowerCase().includes(lowQuery)
    || movie.description.toLowerCase().includes(lowQuery));

  return visibleMovies;
}

export function App() {
  const [query, setQuery] = useState('');
  const [movies] = useState(moviesFromServer);

  const visibleMovies = getVisibleMovies(movies, query);

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
                value={query}
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setQuery(event.currentTarget.value);
                }}
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
}
