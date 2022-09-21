import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
// import { event } from 'cypress/types/jquery';

export function getFilterMovies(
  movies: Movie[], query: string,
) {
  return movies.filter(movie => {
    const { title, description } = movie;

    return (
      title.toLowerCase().includes(query.toLowerCase())
      || description.toLowerCase().includes(query.toLowerCase())
    );
  });
}

export const App: React.FC = () => {
  const [query, setFilter] = useState('');
  const visibleMovies = getFilterMovies(moviesFromServer, query);

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
                onChange={(event) => setFilter(event.target.value)}
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
