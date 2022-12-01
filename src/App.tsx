import React, { useState } from 'react';
import './App.scss';
import { Movie } from './types/Movie';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterFilms = (element: string, query: string): boolean => {
  return element.toLowerCase().includes(query.toLowerCase());
};

const getFilteredFilms = (
  films: Movie[],
  query: string,
) => {
  return films.filter(film => {
    const filterByTitle = filterFilms(film.title, query);
    const filterByDescription = filterFilms(film.description, query);

    return filterByTitle || filterByDescription;
  });
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getFilteredFilms(moviesFromServer, query);

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
                onChange={(event) => setQuery(event.target.value)}
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
