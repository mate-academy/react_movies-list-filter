import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filter = (str: string, searchStr: string) => {
  const adaptQuery = searchStr.toLowerCase();

  return str.toLowerCase().includes(adaptQuery);
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  let foundMovies;

  if (query.length < 3) {
    foundMovies = moviesFromServer;
  } else {
    foundMovies = moviesFromServer.filter(movie => {
      return filter(movie.title, query) || filter(movie.description, query);
    });
  }

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
                onChange={(event) => setQuery(event.currentTarget.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={foundMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
