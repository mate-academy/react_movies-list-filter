import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export function getVisibleMovies(
  movies: Movie[],
  query: string,
) {
  const normalQuery = query.toLowerCase();

  return movies.filter(movie => {
    const titleLower = movie.title.toLowerCase().includes(normalQuery);
    const descriptionLower
    = movie.description.toLowerCase().includes(normalQuery);

    return titleLower || descriptionLower;
  });
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, query);

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
                onChange={((event) => setQuery(event.target.value))}
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
