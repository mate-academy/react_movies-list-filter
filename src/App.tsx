import React, { useState } from 'react';
import './App.scss';
import { Movie } from './components/types/Movie';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  function filtreMoviesList(movie: Movie): boolean {
    const { title, description } = movie;
    const queryToDown = query.toLocaleLowerCase();
    const titleToDown = title.toLocaleLowerCase();
    const descriptionToDown = description.toLocaleLowerCase();

    if (titleToDown.includes(queryToDown)
    || descriptionToDown.includes(queryToDown)) {
      return true;
    }

    return false;
  }

  const filtredMovies = moviesFromServer.filter(filtreMoviesList);

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
                onChange={(event) => (setQuery(event.target.value))}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filtredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
