import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type Movie = {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
};

export function filteredFilms(
  movies: Movie[],
  query: string,
) {
  let visibleFilms = [...movies];

  function isInsclude(obj: string): number {
    if (obj.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
      return 1;
    }

    return 0;
  }

  visibleFilms = visibleFilms.filter((movie) => {
    if (isInsclude(movie.title) === 1
    || isInsclude(movie.description) === 1) {
      return 1;
    }

    return 0;
  });

  return visibleFilms;
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  function handleSet(event: string) {
    setQuery(event);
  }

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
                defaultValue={query}
                onChange={(event) => {
                  handleSet(event.target.value);
                }}
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredFilms(moviesFromServer, query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
