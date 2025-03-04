import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const includesString = (str: string, substr: string) => {
  const strTolower = str.toLocaleLowerCase();
  const substrToLower = substr.toLocaleLowerCase().trim();

  return strTolower.includes(substrToLower);
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setQuery(value);
  };

  const filteredMoviesByQuery = (movies: Movie[]) => (
    movies.filter(({ title, description }) => {
      return includesString(title, query)
      || includesString(description, query);
    }));

  const visibleMovies = filteredMoviesByQuery(moviesFromServer);

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

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
