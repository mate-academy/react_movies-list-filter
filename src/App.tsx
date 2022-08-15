import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, changedQuery] = useState('');
  const preparedChangedQuery = query.toLowerCase();

  const filtredMovies = (movies: Movie[]) => {
    return movies.filter(movie => (
      movie.title.toLowerCase().includes(preparedChangedQuery)
      || movie.description.toLowerCase().includes(preparedChangedQuery)
    ));
  };

  const visibleMovie = filtredMovies(moviesFromServer);

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
                type="search"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={((event) => changedQuery(event.target.value))}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovie} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
