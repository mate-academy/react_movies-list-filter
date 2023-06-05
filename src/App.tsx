import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function findTheMovie(field: string, film: string) {
  return field.toLowerCase().includes(film);
}

export const App: React.FC = () => {
  const [film, setFilm] = useState('');

  const visibleFilms = (movies: Movie[]) => {
    return movies
      .filter(movie => findTheMovie(movie.description, film)
        || findTheMovie(movie.title, film));
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
                onChange={(event) => {
                  setFilm((event.target.value).toLowerCase().trim());
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleFilms(moviesFromServer)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
