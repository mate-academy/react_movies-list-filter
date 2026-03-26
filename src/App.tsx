import React from 'react';
import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Movie } from './components/Types/Movie';

function getPreparedMovies(movies: Movie[], query: string) {
  let preparedMovies;
  const correctedQuery = query.trim().toLowerCase();

  if (correctedQuery) {
    preparedMovies = movies.filter(
      movie =>
        movie.title.toLowerCase().includes(correctedQuery) ||
        movie.description.toLowerCase().includes(correctedQuery),
    );
  }

  return preparedMovies || movies;
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, query);

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
                value={query}
                onChange={event => setQuery(event.target.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
