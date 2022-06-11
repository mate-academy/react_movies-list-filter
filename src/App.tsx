import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const queryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const visibleMovies = moviesFromServer.filter(movie => (
    movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    || movie.description.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  ));

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
                name="query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={queryChange}
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
