import React, { useState } from 'react';
import moviesFromServer from './api/movies.json';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Movie } from './types/Movie';

function searchMovies(movies: Array<Movie>, query: string) {
  return movies.filter(
    movie =>
      movie.title.toLowerCase().includes(query.trim().toLowerCase()) ||
      movie.description.toLowerCase().includes(query.trim().toLowerCase()),
  );
}

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const movies = searchMovies(moviesFromServer, query);

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
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
