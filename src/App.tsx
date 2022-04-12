import React, { useMemo, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Movie } from './types';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filterMovies = (movies: Movie[]) => {
    return movies.filter(({ description, title }) => {
      const searchQuery = query.toLowerCase();

      const byTitle = title.toLowerCase()
        .includes(searchQuery);
      const byDescription = description.toLowerCase()
        .includes(searchQuery);

      return byTitle || byDescription;
    });
  };

  const visibleMovies = useMemo(() => filterMovies(moviesFromServer), [query]);

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
                onChange={changeHandler}
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
