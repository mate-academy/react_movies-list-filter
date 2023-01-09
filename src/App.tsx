import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setProperQuery] = useState('');

  const changeValue = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setProperQuery(value);
  };

  const visibleMovies = moviesFromServer.filter(movie => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();
    const properQuery = query.toLowerCase().trim();

    return title.includes(properQuery) || description.includes(properQuery);
  });

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
                onChange={changeValue}
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
