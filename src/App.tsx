import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export function getVisibleMovies(
  movies: Movie[],
  query: string,
) {
  return movies.filter((movie) => {
    const { title, description } = movie;

    const titleOfMovie = title
      .toLowerCase()
      .includes(query.toLowerCase());

    const descriptionOfMovie = description
      .toLowerCase()
      .includes(query.toLowerCase());

    return (titleOfMovie || descriptionOfMovie);
  });
}

export const App: React.FC = () => {
  const [query, setMovie] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, query);

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
                onChange={(event) => setMovie(event.target.value)}
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
