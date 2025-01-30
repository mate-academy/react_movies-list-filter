import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

export function filterMovies(movies: Movie[], inputValue: string) {
  if (inputValue === '') {
    return movies;
  }

  const trimmedLowercaseInput = inputValue.trim().toLocaleLowerCase();

  return movies.filter(movie => {
    const isTitleMatching = movie.title
      .toLocaleLowerCase()
      .includes(trimmedLowercaseInput);
    const isDescriptionMatching = movie.description
      .toLocaleLowerCase()
      .includes(trimmedLowercaseInput);

    return isTitleMatching || isDescriptionMatching;
  });
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const moviesToRender = filterMovies(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesToRender} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
