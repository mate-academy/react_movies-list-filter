import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleInput = (value: ChangeEvent<HTMLInputElement>) => {
    setQuery(value.target.value);
  };

  const visibleMovies = moviesFromServer.filter(movie => {
    const { title, description } = movie;

    return title.toLowerCase().includes(query.toLowerCase())
      || description.toLowerCase().includes(query.toLowerCase());
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
                name="query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={handleInput}
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
