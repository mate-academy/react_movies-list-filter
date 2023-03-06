import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(
  movies: Movie[],
  queryUser: string,
) {
  const visibleGoods = movies.filter(movie => {
    const title = movie.title.toLowerCase();
    const desc = movie.description.toLowerCase();
    const query = queryUser.toLowerCase();
    const result = title.includes(query) || desc.includes(query);

    return result;
  });

  return visibleGoods;
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

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
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterMovies(moviesFromServer, query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
