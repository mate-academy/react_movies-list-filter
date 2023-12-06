import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const filtered = moviesFromServer.filter((movie) => {
    const queryArray = query.split(' '); // Replace with your actual array of words

    return queryArray.every((word) => movie
      .title.toLowerCase().includes(word.toLowerCase().trim())
      || movie.description.toLowerCase().includes(word.toLowerCase().trim()));
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
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filtered} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
