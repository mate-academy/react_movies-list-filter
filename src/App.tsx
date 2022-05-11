import React, { useState, useMemo } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const changeQuery = (event: React.SyntheticEvent<EventTarget>) => {
    const { target } = event;
    const { value } = target as HTMLInputElement;

    setQuery(value);
  };

  const queryForSearch = query.toLowerCase();

  const filterMovies = (movies: Movie[], searchParam: string) => {
    return movies.filter(({ title, description }) => {
      const changeTitle = title.toLowerCase();
      const changeDescription = description.toLowerCase();

      return changeTitle.includes(searchParam)
      || changeDescription.includes(searchParam);
    });
  };

  const visibleMovies = useMemo(() => filterMovies(moviesFromServer,
    queryForSearch), [moviesFromServer, queryForSearch]);

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
                onChange={changeQuery}
              />
            </div>
          </div>
        </div>

        {visibleMovies.length > 0 && <MoviesList movies={visibleMovies} />}
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
