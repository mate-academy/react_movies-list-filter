import React, { ChangeEvent, useState } from 'react';
import moviesFromServer from './api/movies.json';
import './App.scss';
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const getFilteredMovies = () => {
    if (!query) {
      return moviesFromServer;
    }

    const isMatch
    = (text: string,
      textQuery: string) => text.toLowerCase().includes(textQuery);

    const lowerCaseQuery = query.toLowerCase().trim();

    return moviesFromServer.filter(movie => isMatch(movie.title, lowerCaseQuery)
      || isMatch(movie.description, lowerCaseQuery));
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => (
    setQuery(e.target.value)
  );

  const visibleMovies = getFilteredMovies();

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
                onChange={onChangeHandler}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
