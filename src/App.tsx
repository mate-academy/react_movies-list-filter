import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export function getSearchMovie(
  films: string[], sortFilm: string,
) {
  const visibleFilms = [...films];

  if (sortFilm.length) {
    return visibleFilms.includes(sortFilm);
  }

  return visibleFilms;
}

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handlSearchFilm = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => setSearchQuery(e.target.value);

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
                value={searchQuery}
                placeholder="Type search word"
                onChange={handlSearchFilm}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={
          searchQuery
            ? moviesFromServer.filter(
              movie => movie.title.toLocaleLowerCase()
                .includes(searchQuery.toLocaleLowerCase())
            || movie.description.toLocaleLowerCase()
              .includes(searchQuery.toLocaleLowerCase()),
            )
            : moviesFromServer
        }
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
