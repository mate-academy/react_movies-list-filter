import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  function findQuery(str: string, subStr: string) {
    return str.toLocaleLowerCase().includes(subStr.toLocaleLowerCase());
  }

  const visibleMovies = [...moviesFromServer]
    .filter(movie => findQuery(movie.title, query)
      || findQuery(movie.description, query));

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
                onChange={(event) => setQuery(event.target.value)}
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
