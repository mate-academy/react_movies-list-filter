import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function isIncludes(value: string, searchValue: string) {
  return value.toLowerCase().includes(searchValue);
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filterMovies = (movieList: Movie[]) => {
    const searchValue = query.toLowerCase().trim();

    return [...movieList].filter((movie) => {
      return isIncludes(movie.title, searchValue)
        || isIncludes(movie.description, searchValue);
    });
  };

  const filteredListOfMovies = filterMovies(moviesFromServer);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
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
                onChange={handleChangeQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredListOfMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
