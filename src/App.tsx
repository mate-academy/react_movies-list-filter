import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export function filterMovies(
  movies: Movie[],
  query: string,
) {
  const filterMoviesArr = [...movies];
  const queryCorrect = query.trim().toLocaleLowerCase();

  return filterMoviesArr.filter((movie) => (
    movie.title.toLocaleLowerCase().includes(queryCorrect)
    || movie.description.toLocaleLowerCase().includes(queryCorrect)
  ));
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const filterMov = filterMovies(
    moviesFromServer,
    query,
  );
  // eslint-disable-next-line max-len
  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);

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
                onChange={handleQuery}
              />
            </div>
          </div>
        </div>
        {filterMov.length > 0
          ? <MoviesList movies={filterMov} />
          : <p>Not found any movies</p>}
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
