import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filteredMovies(movies: Movie[], query: string): Movie[] {
  const fixedQuery = query.toLowerCase().trim();

  const visibleMovies: Movie[] = movies.filter((film: Movie) => film
    .title.toLowerCase().includes(fixedQuery)
    || film.description.toLowerCase().includes(fixedQuery));

  return visibleMovies;
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies: Movie[] = filteredMovies(moviesFromServer, query);

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
                onChange={(event) => (
                  setQuery(event.target.value)
                )}
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
