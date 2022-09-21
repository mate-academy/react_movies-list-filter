import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export function checkQuery(movies: Movie[], query: string) {
  return movies.filter(movie => {
    const { title, description } = movie;

    return title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    || description.toLocaleLowerCase().includes(query.toLocaleLowerCase());
  });
}

export const App: React.FC = () => {
  const [query, setMovieSelected] = useState('');

  const visibleMovies = checkQuery(moviesFromServer, query);

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
                onChange={(event) => setMovieSelected(event.target.value)}
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
