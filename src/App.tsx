import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const visiableMovies = (query: string) => {
    return moviesFromServer.filter(movie => {
      const description = movie.description.toLocaleLowerCase();
      const title = movie.title.toLocaleLowerCase();
      const correctQuery = query.toLocaleLowerCase().trim();

      return description.includes(correctQuery)
        || title.includes(correctQuery);
    });
  };

  const [query, setSearch] = useState('');

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
                onChange={event => setSearch(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visiableMovies(query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
