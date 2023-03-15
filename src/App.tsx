import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, filterOnQuery] = useState('');
  const isSimilar = (whereSearching: string, whatSearching: string) => (
    whereSearching.toLocaleLowerCase()
      .includes(whatSearching.toLocaleLowerCase().trim())
  );

  const visibleMovies = moviesFromServer.filter(movie => (
    isSimilar(movie.title, query) || isSimilar(movie.description, query)
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
                className="input"
                placeholder="Type search word"
                onChange={(event) => filterOnQuery(event.target.value)}
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
