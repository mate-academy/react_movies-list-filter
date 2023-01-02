import React, { useMemo, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const filterMovies = () => {
    const filteredMovies = moviesFromServer.filter((movie) => {
      return movie.title.toLocaleLowerCase().includes(query)
      || movie.description.toLocaleLowerCase().includes(query);
    });

    return filteredMovies;
  };

  useMemo(() => filterMovies(), []);

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
                onChange={(event) => {
                  setQuery(event.target.value.toLocaleLowerCase());
                  filterMovies();
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterMovies()} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
