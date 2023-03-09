import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = string;

type Movies = {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string
};

export function getFilteredMovies(movies: Movies[], filter: string) {
  const visibleMovies = [...movies];

  return visibleMovies.filter(movie => movie.title
    .toLowerCase()
    .includes(filter.toLowerCase().trim())
    || movie.description.toLowerCase().includes(filter.toLowerCase().trim()));
}

export const App: React.FC = () => {
  const [movieListState, setMovieListState] = useState<State>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMovieListState(e.target.value);
  };

  const visibleMovies = getFilteredMovies(moviesFromServer, movieListState);

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
                value={movieListState}
                onChange={handleChange}
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
